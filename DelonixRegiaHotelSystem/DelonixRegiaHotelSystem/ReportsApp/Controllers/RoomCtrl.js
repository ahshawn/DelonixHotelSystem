angular.module("Report.RoomController", [])
    .controller("RoomCtrl",
    [
        "$scope", "$http", function ($scope, $http) {
            var roomApiUrl = "/api/rooms/";
            $scope.model = {
            };
            $scope.new = {
                Room: {}
            };

            var getRoom = function () {
                $http({
                    method: 'GET',
                    url: roomApiUrl
                }).then(function successCallback(response) {
                    $scope.model.Rooms = response.data;
                },
                    function errorCallback(response) {
                        console.log(response);
                    });
            };

            getRoom();

            $scope.print = function () {
                window.print();
            };

            //Add Room
            $scope.new = {
                Room: {}
            };

            $scope.addRoom = function() {
                $http.post(roomApiUrl, $scope.new.Room)
                    .then(
                    function (response) {
                        alert("Added A Room Successfully");
                        $scope.model.Rooms.push(response.data);
                    },
                    function (err) {
                        alert("Something went wrong!" + err);
                    });

            };
        }
    ]);