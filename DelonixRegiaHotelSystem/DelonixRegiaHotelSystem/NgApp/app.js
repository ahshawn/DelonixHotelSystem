var reportApp = angular.module("ReportApp", ["ngRoute", "chart.js", "ui.bootstrap"]);

reportApp.filter('getById', function () {
    return function (input, id) {
        if (input) {
            var i = 0;
            var len = input.length;
            for (; i < len; i++) {
                if (+input[i].roomID == +id) {
                    return input[i];
                }
            }
            return null;
        }
    }
});


reportApp.config(function ($routeProvider) {
    $routeProvider
        .when("/room", {
            templateUrl: "NgApp/Views/room.html",
            controller: "RoomCtrl"
        })

        .when("/room/add", {
            templateUrl: "NgApp/Views/addroom.html",
            controller: "AddRoomCtrl"
        })

        .when("/room/edit/:id", {
            templateUrl: "NgApp/Views/editroom.html",
            controller: "EditRoomCtrl"
        })

        .when("/occupancy", {
            templateUrl: "NgApp/Views/searchoccupancy.html",
            controller: "OccupantsCtrl"
        })

        .when("/occupancy/all", {
            templateUrl: "NgApp/Views/allguestinallroom.html",
            controller: "AllGuestsCtrl"
        })
        .when("/occupancy/statistic", {
            templateUrl: "NgApp/Views/occupancystatistic.html",
            controller: "OccupancyStatisticCtrl"
        })
        .when("/bookingdetail/", {
            templateUrl: "NgApp/Views/bookingdetails.html",
            controller: "BookingDetailsCtrl"
        })
        .when("/bookingdetail/:id", {
            templateUrl: "NgApp/Views/editbookingdetails.html",
            controller: "EditBookingDetailsCtrl"
        })
        .when("/bookingdetail/:id/checkout", {
            templateUrl: "NgApp/Views/checkout.html",
            controller: "CheckOutCtrl"
        })

        .otherwise({
            redirectTo: "/room"
        });
});

reportApp.config(['ChartJsProvider', function (ChartJsProvider) {
    // Configure all charts
    ChartJsProvider.setOptions({
        chartColors: ['#FF5252', '#FF8A80'],
        responsive: false
    });
    // Configure all line charts
    ChartJsProvider.setOptions('line', {
        showLines: false
    });
}])