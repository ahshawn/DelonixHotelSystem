var reportApp = angular.module("ReportApp");
reportApp.controller("EditRoomCtrl",
    [
        "$scope", "roomService", "$routeParams",
        function ($scope, roomService, $routeParams) {
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
                        $scope.success = "You have successfully updated the room!";
                    });
            };

        }
    ]);