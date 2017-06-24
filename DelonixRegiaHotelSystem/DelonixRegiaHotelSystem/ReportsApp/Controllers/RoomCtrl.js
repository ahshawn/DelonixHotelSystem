var reportApp = angular.module("ReportApp");
reportApp.controller("RoomCtrl",
    [
        "$scope", "roomService", "$location", "$routeParams", "$log",
        function($scope, roomService, $location, $routeParams, $log) {
            $scope.model = {
            };
            $scope.new = {
                Room: {}
            };


            //Get Room

            var getRoom = function () {
                $scope.loader = true;
                roomService.getAllRoom()
                    .then(function (data) {
                        $scope.loader = false;
                        $scope.model.Rooms = data;
                    });
            };

            getRoom();

            //Add Room

            $scope.addRoom = function () {
                roomService.addRoom($scope.new.Room);
                $location.path("/room");

            };

            //Delete Room
            $scope.deleteConfirmation = function(room) {
                $scope.roomIDToDelete = room.roomID;
            };

            $scope.confirmDelete = function (id) {
                $scope.loader = true;
                roomService.deleteRoom(id)
                    .then(function (response) {
                        $scope.loader = false;
                        alert("Record successfully deleted: " + response.data.roomID);
                        getRoom();
                    });
            };


            //print

            $scope.print = function () {
                window.print();
            };
        }
    ]);