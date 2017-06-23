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
            $scope.edit = {

            };

            //Get Room

            var getRoom = function () {
                roomService.getAllRoom()
                    .then(function (data) {
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

            $scope.confirmDelete = function(id) {
                roomService.deleteRoom(id)
                    .then(function(response) {
                        alert("Record successfully deleted: " + response.data.roomID);
                        getRoom();
                    });
            };

            //EDIT Room
            $scope.editRoom = function(id) {

                roomService.getRoom(id)
                    .then(function(data) {
                        $scope.edit.Room = data;
                        $log.warn($scope.edit.Room);
                    });
            };


            //print

            $scope.print = function () {
                window.print();
            };
        }
    ]);