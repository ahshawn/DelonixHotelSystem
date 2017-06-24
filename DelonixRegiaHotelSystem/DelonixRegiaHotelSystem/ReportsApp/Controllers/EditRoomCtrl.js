var reportApp = angular.module("ReportApp");
reportApp.controller("EditRoomCtrl",
    [
        "$scope", "roomService", "$location", "$routeParams", "$log",
        function ($scope, roomService, $location, $routeParams, $log) {
            $scope.edit = {
            };

            var id = $routeParams.id;
            $scope.loader = true;
            roomService.getRoom(id)
                .then(function (data) {
                    $scope.loader = false;
                    $scope.edit.Room = data;
                });

            $scope.editRoom = function () {
                $scope.loader = true;
                roomService.editRoom(id, $scope.edit.Room)
                    .then(function (data) {
                        $scope.loader = false;
                        alert("Successfully editted : " + data);
                    });
            };

        }
    ]);