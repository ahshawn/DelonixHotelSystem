(function () {

    var paymentService = function ($http) {
        var paymentApiUrl = "/api/payments/";

        var getAllPayment = function () {
            return $http.get(paymentApiUrl)
                .then(function (response) {
                    return response.data;
                });
        };

        var getPaymentId = function (id) {
            return $http.get(paymentApiUrl + id)
                .then(function (response) {
                    return response.data;
                });
        };


        return {
            getAllPayment: getAllPayment,
            getPaymentId: getPaymentId
        };

    };

    var reportApp = angular.module("ReportApp");
    reportApp.factory("paymentService", paymentService);

}());