var reportApp = angular.module("ReportApp");
reportApp.controller("BookingDetailsCtrl", [
    "$scope", "orderService", "customerService", "$location",
    function ($scope, orderService, customerService, location) {

        $scope.found = {};
        $scope.error = {};
        $scope.selectSearch = [{
                'item': 'Room Number'
            },
            {
                'item': 'Order Id'
            }
        ];
        $scope.searchBy = $scope.selectSearch[0].item;

        var getCustomer = function (id) {
            customerService.getCustomerId(id)
                .then(function (data) {
                    $scope.loader = false;
                    $scope.found.customer = data;
                });
        };

        $scope.searchRoomOccupancy = function () {
            $scope.error = {};
            $scope.found = {};
            $scope.loader = true;
            $scope.searchItem = $scope.searchItem * 1;
            if($scope.searchBy === "Room Number"){
                orderService.getOccupiedRoomId($scope.searchItem)
                .then(function (data) {
                        $scope.found.room = data;
                        getCustomer(data.customerID);
                    },
                    function (error) {
                        $scope.loader = false;
                        $scope.error.room = error;
                        $scope.error.room.searchItem = $scope.searchItem;
                    });
            } else {
                orderService.getOrderId($scope.searchItem)
                .then(function (data) {
                        $scope.found.room = data;
                        getCustomer(data.customerID);
                    },
                    function (error) {
                        $scope.loader = false;
                        $scope.error.room = error;
                        $scope.error.room.searchItem = $scope.searchItem;
                    });
            }
            
        };

        $scope.checkout = function () {
            //todo
        }

        // $scope.editOrder = function () {
        //     $scope.loader = true;
        //     roomService.editRoom(id, $scope.edit.Order)
        //         .then(function (data) {
        //             $scope.loader = false;
        //             $scope.success = "You have successfully updated the room!";
        //         });
        // };

    }
]);