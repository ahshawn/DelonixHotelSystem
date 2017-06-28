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
                }, function(err){
                    $scope.error.customer = err;
                    $scope.loader = false;
                });
        };

        var startWatch = function () {

            $scope.$watch('$scope.searchItem', function (newVal, oldVal) {
                $scope.searchItem = newVal * 1;
                console.log($scope.searchItem);
            });
        }
        startWatch();
        $scope.searchRoomOccupancy = function () {
            $scope.error = {};
            $scope.found = {};
            $scope.loader = true;

            if ($scope.searchBy === "Room Number") {
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
            } else if ($scope.searchBy === "Order Id") {
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



    }
]);