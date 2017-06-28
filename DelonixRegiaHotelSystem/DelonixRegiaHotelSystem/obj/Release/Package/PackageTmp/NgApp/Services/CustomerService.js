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
        var editCustomer = function (id, customer) {
            return $http.put(customerApiUrl + id, customer)
                .then(function (response) {
                    return response.data;
                });
        };

        return {
            getAllCustomer: getAllCustomer,
            getCustomerId: getCustomerId,
            editCustomer: editCustomer
        };

    };

    var reportApp = angular.module("ReportApp");
    reportApp.factory("customerService", customerService);

}());