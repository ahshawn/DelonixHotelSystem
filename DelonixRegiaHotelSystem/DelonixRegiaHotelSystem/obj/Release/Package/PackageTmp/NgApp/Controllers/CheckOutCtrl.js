var reportApp = angular.module("ReportApp");
reportApp.controller("CheckOutCtrl", [
    "$scope", "orderService", "customerService", "$routeParams", "roomService", '$filter', "paymentService",
    function ($scope, orderService, customerService, $routeParams, roomService, $filter, paymentService) {
        $scope.model = {
            AdditionalCost: 0
        };

        var id = $routeParams.id;
        $scope.loader = true;

        orderService.getOrderId(id)
            .then(function (data) {
                $scope.loader = false;
                $scope.model.Order = data;
                $scope.model.RoomCost = data.totalCost;
                getCustomer($scope.model.Order.customerID);
                getPayment($scope.model.Order.paymentID);
                startWatch();
            });

        $scope.checkOut = function () {
            $scope.model.Order.CheckoutStatus = "Done";
            $scope.loader = true;
            editOrder();
        };

        var editRoom = function () {

            roomService.getRoom($scope.model.Order.roomID)
                .then(function (data) {
                    $scope.model.Room = data;
                    $scope.model.Room.Status = "Scheduled To Clean";
                    doneGetRoom = true;
                    updateRoom();
                });

            var updateRoom = function () {
                if (doneGetRoom) {
                    roomService.editRoom($scope.model.Room.roomID, $scope.model.Room)
                        .then(function (data) {
                            $scope.loader = false;
                            $scope.success = "Successfully Check Out!";
                        }, function (err) {
                            console.log(err);
                        });
                }
            }

        };

        var editOrder = function () {
            orderService.editOrder($scope.model.Order.orderDetailID, $scope.model.Order)
                .then(function (data) {
                    editRoom();
                });
        };

        var getCustomer = function (id) {
            customerService.getCustomerId(id)
                .then(function (data) {
                    $scope.loader = false;
                    $scope.model.Customer = data;
                });
        };

        var getPayment = function (id) {
            paymentService.getPaymentId(id)
                .then(function (data) {
                    $scope.model.Payment = data;
                    console.log($scope.model);
                })
        }


        var startWatch = function () {

            $scope.$watch('model.AdditionalCost', function (newVal, oldVal) {

                $scope.model.Order.totalCost = newVal + $scope.model.RoomCost;

            });
        }


        //print

        $scope.print = function () {
            window.print();
        };
    }
]);