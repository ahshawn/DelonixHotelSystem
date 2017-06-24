(function () {

    var customerService = function ($http) {
        var customerApiUrl = "/api/customers/";

        var getAllCustomer = function () {
            return $http.get(customerApiUrl)
                .then(function (response) {
                    return response.data;
                });
        };

        var getCustomerId = function (customerId) {
            return $http.get(customerApiUrl + customerId)
                .then(function (response) {
                    return response.data;
                });
        };


        return {
            getAllCustomer: getAllCustomer,
            getCustomerId: getCustomerId
        };

    };

    var reportApp = angular.module("ReportApp");
    reportApp.factory("customerService", customerService);

}());