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
            controller: "AddRoomCtrl"
        })

        .when("/room/edit/:id",
        {
            templateUrl: "ReportsApp/Views/editroom.html",
            controller: "EditRoomCtrl"
        })

        .when("/occupancy",
        {
            templateUrl: "ReportsApp/Views/searchoccupancy.html",
            controller: "OccupantsCtrl"
        })

        .when("/alloccupancy",
            {
                templateUrl: "ReportsApp/Views/searchoccupancy.html",
                controller: "OccupantsCtrl"
            })

        .otherwise({ redirectTo: "/room" });
});