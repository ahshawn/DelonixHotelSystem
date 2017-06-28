(function () {

    var orderService = function ($http) {
        var orderApiUrl = "/api/orderdetails/";

        var getAllOrder = function () {
            return $http.get(orderApiUrl)
                .then(function (response) {
                    return response.data;
                });
        };

        var getRoomId = function (roomId) {
            return $http.get(orderApiUrl + "room/" + roomId)
                .then(function (response) {
                    return response.data;
                });
        };

        var getOccupiedRoomId = function (roomId) {
            return $http.get(orderApiUrl + "occupiedroom/" + roomId)
                .then(function (response) {
                    return response.data;
                });
        };

        var getOrderId = function (roomId) {
            return $http.get(orderApiUrl + roomId)
                .then(function (response) {
                    return response.data;
                });
        };

        var getCheckoutNotDone = function () {
            return $http.get(orderApiUrl + "checkoutnotdone/")
                .then(function (response) {
                    return response.data;
                });
        };

        var editOrder = function (id, Order) {
            return $http.put(orderApiUrl + id, Order)
                .then(function (response) {
                    return response.data;
                });
        };

        return {
            getAllOrder: getAllOrder,
            getRoomId: getRoomId,
            getCheckoutNotDone: getCheckoutNotDone,
            editOrder: editOrder,
            getOrderId: getOrderId,
            getOccupiedRoomId, getOccupiedRoomId
        };

    };

    var reportApp = angular.module("ReportApp");
    reportApp.factory("orderService", orderService);

}());