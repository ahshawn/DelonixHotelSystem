var reportApp = angular.module("ReportApp");
reportApp.controller("EditRoomCtrl",
    [
        "$scope", "roomService", "$location", "$routeParams", "$log",
        function ($scope, roomService, $location, $routeParams, $log) {
            $scope.edit = {
            };

            var id = $routeParams.id;

            roomService.getRoom(id)
                .then(function (data) {
                    $scope.edit.Room = data;
                });

            $scope.editRoom = function() {
                roomService.editRoom(id, $scope.edit.Room)
                    .then(function(data) {
                        alert("Successfully editted : " + data);
                    });
            };

        }
    ]);