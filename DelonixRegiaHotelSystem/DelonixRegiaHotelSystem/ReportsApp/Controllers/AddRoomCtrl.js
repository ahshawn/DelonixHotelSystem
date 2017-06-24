var reportApp = angular.module("ReportApp");
reportApp.controller("AddRoomCtrl",
    [
        "$scope", "roomService", "$location",
        function ($scope, roomService, $location) {
            $scope.new = {
                Room: {}
            };

            //Add Room

            $scope.addRoom = function () {
                roomService.addRoom($scope.new.Room);
                alert("Successfully Added A Room!");

            };

        }
    ]);