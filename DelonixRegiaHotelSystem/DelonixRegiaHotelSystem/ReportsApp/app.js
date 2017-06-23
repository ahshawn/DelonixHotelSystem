var reportApp = angular.module("ReportApp", ["ngRoute"]);


reportApp.config(function ($routeProvider) {
    $routeProvider
        .when("/room",
        {
            templateUrl: "ReportsApp/Views/room.html",
            controller: "RoomCtrl"
        })

        .when("/room/add",
        {
            templateUrl: "ReportsApp/Views/addroom.html",
            controller: "RoomCtrl"
        })

        .when("/room/edit/:id",
            {
                templateUrl: "ReportsApp/Views/editroom.html",
                controller: "EditRoomCtrl"
        })

        .otherwise({ redirectTo: "/room" });
});