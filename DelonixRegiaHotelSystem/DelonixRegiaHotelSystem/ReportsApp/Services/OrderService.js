(function() {

    var orderService = function($http) {
        var orderApiUrl = "/api/orderdetails/";

        var getAllRoom = function() {
            return $http.get(orderApiUrl)
                .then(function(response) {
                    return response.data;
                });
        };

        var getRoomId = function(roomId) {
            return $http.get(orderApiUrl + "room/" + roomId)
                .then(function(response) {
                    return response.data;
                });
        };

        var getCheckoutNotDone = function() {
            return $http.get(orderApiUrl + "checkoutnotdone/")
                .then(function(response) {
                    return response.data;
                });
        };

        return {
            getAllRoom: getAllRoom,
            getRoomId: getRoomId,
            getCheckoutNotDone: getCheckoutNotDone
        };

    };

    var reportApp = angular.module("ReportApp");
    reportApp.factory("orderService", orderService);

}());