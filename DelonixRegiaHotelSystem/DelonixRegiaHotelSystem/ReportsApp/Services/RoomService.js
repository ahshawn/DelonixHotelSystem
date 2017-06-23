(function () {

    var roomService = function($http) {
        var roomApiUrl = "/api/rooms/";

        var getAllRoom = function() {
            return $http.get(roomApiUrl)
                .then(function(response) {
                    return response.data;
                });
        };

        var addRoom = function(room) {
            return $http.post(roomApiUrl, room)
                .then(
                    function(response) {
                        return response.data;
                    });
        };

        var deleteRoom = function(id) {
            return $http.delete(roomApiUrl + id);
        };

        var getRoom = function(id) {
            return $http.get(roomApiUrl + id)
                .then(function(response) {
                    return response.data;
                });
        };

        var editRoom = function(id, room) {
            return $http.put(roomApiUrl + id, room)
                .then(function(response) {
                    return response.data;
                });
        };

        return {
            getAllRoom: getAllRoom,
            addRoom: addRoom,
            deleteRoom: deleteRoom,
            getRoom: getRoom,
            editRoom: editRoom
        };


    };


    var reportApp = angular.module("ReportApp");
    reportApp.factory("roomService", roomService);
}());