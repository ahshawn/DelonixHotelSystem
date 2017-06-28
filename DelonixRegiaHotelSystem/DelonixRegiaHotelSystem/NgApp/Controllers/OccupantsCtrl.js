var reportApp = angular.module("ReportApp");
reportApp.controller("OccupantsCtrl",
    [
        "$scope", "orderService", "customerService", "$log", function($scope, orderService, customerService, $log) {

            $scope.found = {};
            $scope.error = {};

            var getCustomer = function(id) {
                customerService.getCustomerId(id)
                    .then(function(data) {
                        $scope.loader = false;
                        $scope.found.customer = data;
                    });
            }; 

            $scope.searchRoomOccupancy = function() {
                $scope.error = {};
                $scope.found = {};
                $scope.loader = true;
                $scope.searchItem = $scope.searchItem * 1;
                orderService.getOccupiedRoomId($scope.searchItem)
                    .then(function(data) {
                            $scope.found.room = data;
                            getCustomer(data.customerID);
                        },
                        function(error) {
                            $scope.loader = false;
                            $scope.error.room = error;
                            $scope.error.room.searchItem = $scope.searchItem;
                        });
            };

            //print

            $scope.print = function () {
                window.print();
            };
        }
    ]);