var reportApp = angular.module("ReportApp");
reportApp.controller("AllGuestsCtrl",
    [
        "$scope", "orderService", "customerService", "$log", function ($scope, orderService, customerService, $log) {

            $scope.found = {};
            $scope.edit = {

            };

            $scope.error = {};
            $scope.loader = true;

            orderService.getCheckoutNotDone()
                .then(function (data) {
                    $scope.loader = false;
                    $scope.found.rooms = data;
                });

            //print

            $scope.print = function () {
                window.print();
            };
        }
    ]);