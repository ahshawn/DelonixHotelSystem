var reportApp = angular.module("ReportApp");
reportApp.controller("AddRoomCtrl", [
    "$scope", "roomService", "$location",
    function ($scope, roomService, $location) {
        $scope.new = {
            Room: {},
            SelectRooms: [{
                    'item': 'Single-Bed Room'
                },
                {
                    'item': 'Double-Bed Room'
                },
                {
                    'item': 'Queen-Size Bed Room'
                },
                {
                    'item': 'King-Size Bed Room'
                }
            ],
            SelectStatus: [{
                    'item': 'Available'
                },
                {
                    'item': 'Occupied'
                },
                {
                    'item': 'Scheduled To Clean'
                },
                {
                    'item': 'Unavailable'
                }
            ]
        };

        //Add Room

        $scope.addRoom = function () {
            roomService.addRoom($scope.new.Room)
                .then(function (data) {
                    $scope.success = "You have successfully added the room. The new room id is : " + data.roomID;
                    $scope.new.Room = {};
                }, function (err) {
                    $scope.failure = "Error adding the room, please look at your input and ensure they are correct";
                });

        };

        $scope.new.Room.roomType = $scope.new.SelectRooms[0].item;
        $scope.new.Room.Status = $scope.new.SelectStatus[0].item;
    }
]);