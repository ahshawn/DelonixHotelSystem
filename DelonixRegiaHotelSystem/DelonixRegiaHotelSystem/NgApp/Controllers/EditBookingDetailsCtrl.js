var reportApp = angular.module("ReportApp");
reportApp.controller("EditBookingDetailsCtrl", [
    "$scope", "orderService", "customerService", "$routeParams", "roomService", '$filter', "uibDateParser",
    function ($scope, orderService, customerService, $routeParams, roomService, $filter, uibDateParser) {
        $scope.edit = {};
        $scope.updated = {};

        var id = $routeParams.id;
        $scope.loader = true;

        orderService.getOrderId(id)
            .then(function (data) {
                $scope.loader = false;
                $scope.edit.Order = data;
                $scope.oldRoom = data.roomID;
                $scope.edit.Order.CheckInTime = new Date(data.CheckInTime);
                $scope.edit.Order.CheckOutTime = new Date(data.CheckOutTime);
                $scope.edit.logCheckIn = $filter('date')(data.CheckInTime, "yyyy-MM-dd");
                getCustomer($scope.edit.Order.customerID);
                getAvailableRoom();
            });

        $scope.updateOrder = function () {
            $scope.loader = true;
            editOrder();
        };

        var editRoom = function () {
            var doneGetOldRoom, doneGetNewRoom;
            roomService.getRoom($scope.oldRoom)
                .then(function (data) {
                    $scope.updated.oldRoom = data;
                    $scope.updated.oldRoom.Status = "Scheduled To Clean";
                    doneGetOldRoom = true;
                    getNewRoom();
                });
            var getNewRoom = function () {
                roomService.getRoom($scope.edit.Order.roomID)
                    .then(function (data) {
                        $scope.updated.newRoom = data;
                        $scope.updated.newRoom.Status = "Occupied";
                        doneGetNewRoom = true;
                        updateRoom();
                    });
            }

            var updateRoom = function () {
                if (doneGetOldRoom && doneGetNewRoom) {
                    roomService.editRoom($scope.updated.oldRoom.roomID, $scope.updated.oldRoom)
                        .then(function (data) {}, function (err) {
                            console.log(err);
                        });
                    roomService.editRoom($scope.updated.newRoom.roomID, $scope.updated.newRoom)
                        .then(function (data) {
                            $scope.success = "Successfully updated order details and room";
                            $scope.loader = false;
                        }, function (err) {
                            console.log(err);
                        });
                }
            }

        };

        var editOrder = function () {
            orderService.editOrder($scope.edit.Order.orderDetailID, $scope.edit.Order)
                .then(function (data) {
                    if ($scope.oldRoom !== $scope.edit.Order.roomID) {
                        editRoom();
                    } else {
                        $scope.loader = false;
                        $scope.success = "Successfully update order details!"
                    }

                });
        };

        var getCustomer = function (id) {
            customerService.getCustomerId(id)
                .then(function (data) {
                    $scope.loader = false;
                    $scope.edit.Customer = data;
                });
        };

        var getAvailableRoom = function () {
            roomService.getAvailableRoom()
                .then(function (data) {
                    $scope.edit.AvailableRoom = data;
                    startWatch();
                })
        }

        var startWatch = function () {
            $scope.$watch('edit.Order.roomID', function (newVal, oldVal) {
                var found = $filter('getById')($scope.edit.AvailableRoom, newVal);
                if (found) {
                    $scope.edit.Order.roomFloor = found.roomFloor;
                    $scope.edit.Order.roomPrice = found.roomPrice;
                    $scope.edit.Order.roomType = found.roomType;
                    $scope.edit.Order.totalCost = $scope.edit.Order.roomPrice * $scope.edit.Order.totalNumberOfDays;
                }

            });

            $scope.$watch('edit.Order.totalNumberOfDays', function (newVal, oldVal) {

                $scope.edit.Order.totalCost = $scope.edit.Order.roomPrice * newVal;

            });

            $scope.$watch('edit.Order.CheckOutTime', function (newVal, oldVal) {

                $scope.edit.Order.totalNumberOfDays = showDays(newVal, $scope.edit.Order.CheckInTime)

            });
            $scope.$watch('edit.Order.totalAdult', function (newVal, oldVal) {

                $scope.edit.Order.totalNumberOfGuest = newVal + $scope.edit.Order.totalChild;

            });
            $scope.$watch('edit.Order.totalChild', function (newVal, oldVal) {

                $scope.edit.Order.totalNumberOfGuest = newVal + $scope.edit.Order.totalAdult;

            });
        }

        var showDays = function (firstDate, secondDate) {

            var millisecondsPerDay = 1000 * 60 * 60 * 24;

            var millisBetween = firstDate.getTime() - secondDate.getTime();
            var days = millisBetween / millisecondsPerDay;
            // Round down.
            return Math.floor(days);

        }


    }
]);