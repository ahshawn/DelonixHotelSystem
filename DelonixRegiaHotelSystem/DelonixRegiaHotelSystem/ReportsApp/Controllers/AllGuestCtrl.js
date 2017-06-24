var reportApp = angular.module("ReportApp");
reportApp.controller("AllGuestOccupantsCtrl",
    [
        "$scope", "orderService", "$log", function ($scope, orderService, $log) {

            $scope.found = {};
            $scope.error = {};

            $scope.searchRoomOccupancy = function () {
                $scope.error = {};
                $scope.found = {};
                $scope.loader = true;
                orderService.getRoomId($scope.searchItem)
                    .then(function (data) {
                            $scope.loader = false;
                            $scope.found.room = data;
                        },
                        function (error) {
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