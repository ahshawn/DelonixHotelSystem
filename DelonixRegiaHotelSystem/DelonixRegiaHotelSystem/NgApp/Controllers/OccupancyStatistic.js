var reportApp = angular.module("ReportApp");

reportApp.controller("OccupancyStatisticCtrl", [
    "$scope", "orderService", "$log", "$filter", "$timeout",
    function ($scope, orderService, $log, $filter, $timeout) {
        //Chart
        $scope.series = ['Occupancy'];
        $scope.labels = [];
        $scope.data = [];

        //end Chart
        $scope.tab = 1;
        $scope.loader = true;
        //mon,tues,wed,thurs,fri,sat,sun
        $scope.daily = {
            Monday: 0,
            Tuesday: 0,
            Wednesday: 0,
            Thursday: 0,
            Friday: 0,
            Saturday: 0,
            Sunday: 0
        };
        //week 1,2,3,4,5,6,7,8,9..
        $scope.weekly = {};
        //jan, feb, mar, apr, may, jun, july, aug, sep, oct, nov, dec
        $scope.monthly = {};
        //1990, 1991, 1992, 1993, 1994, 1995
        $scope.yearly = {};

        var tempData;
        var dateFinishCompute = false;
        $scope.reportDisplay = "daily";

        var pushDays = function (day) {
            switch (day) {
                case "Monday":
                    $scope.daily.Monday = $scope.daily.Monday + 1;
                    break;
                case "Tuesday":
                    $scope.daily.Tuesday = $scope.daily.Tuesday + 1;
                    break;
                case "Wednesday":
                    $scope.daily.Wednesday = $scope.daily.Wednesday + 1;
                    break;
                case "Thursday":
                    $scope.daily.Thursday = $scope.daily.Thursday + 1;
                    break;
                case "Friday":
                    $scope.daily.Friday = $scope.daily.Friday + 1;
                    break;
                case "Saturday":
                    $scope.daily.Saturday = $scope.daily.Saturday + 1;
                    break;
                case "Sunday":
                    $scope.daily.Sunday = $scope.daily.Sunday + 1;
                    break;

            }

        };
        var pushWeekly = function (week) {
            if ($scope.weekly[week]) {
                $scope.weekly[week] = $scope.weekly[week] + 1;
            } else {
                $scope.weekly[week] = 0;
                $scope.weekly[week] = $scope.weekly[week] + 1;
            }

        };
        var pushMonthly = function (month) {
            if ($scope.monthly[month]) {
                $scope.monthly[month] = $scope.monthly[month] + 1;
            } else {
                $scope.monthly[month] = 0;
                $scope.monthly[month] = $scope.monthly[month] + 1;
            }

        };
        var pushYearly = function (year) {
            if ($scope.yearly[year]) {
                $scope.yearly[year] = $scope.yearly[year] + 1;
            } else {
                $scope.yearly[year] = 0;
                $scope.yearly[year] = $scope.yearly[year] + 1;
            }

        };

        var computeDate = function () {
            tempData.forEach(function (time) {
                var dateInDays = $filter('date')(time.CheckInTime, 'EEEE');
                var dateInWeekly = $filter('date')(time.CheckInTime, 'ww');
                var dateInMonthly = $filter('date')(time.CheckInTime, 'MMMM');
                var dateInYearly = $filter('date')(time.CheckInTime, 'yyyy');
                pushDays(dateInDays);
                pushWeekly(dateInWeekly);
                pushMonthly(dateInMonthly);
                pushYearly(dateInYearly);

            });
            dateFinishCompute = true;
            produceChart();
        };

        orderService.getAllOrder()
            .then(function (data) {
                tempData = data;
                computeDate();
            });

        $scope.select = function (setTab) {
            $scope.tab = setTab;
            if (setTab === 1) {
                $scope.reportDisplay = "daily";
                produceChart();
            } else if (setTab === 2) {
                $scope.reportDisplay = "weekly";
                produceChart();
            } else if (setTab === 3) {
                $scope.reportDisplay = "monthly";
                produceChart();
            } else if (setTab === 4) {
                $scope.reportDisplay = "yearly";
                produceChart();
            }
        }
        $scope.isSelected = function (tab) {
            if ($scope.tab === tab) {
                return true;
            } else {
                return false;
            }
        }

        var pushTempToData = function (array) {
            $scope.data.push(array);
        }

        var generateNewChart = function (scope) {
            $scope.loader = true;
            var tempArray = [];
            for (var v in scope) {
                tempArray.push(scope[v]);
            }
            for (var i in scope) {
                $scope.labels.push(i);
            };
            pushTempToData(tempArray)
        }

        var clearLabelsAndData = function () {
            $scope.labels = [];
            $scope.data = [];
        }

        var produceChart = function () {
            $scope.loader = true;
            if (dateFinishCompute) {
                switch ($scope.reportDisplay) {
                    case "daily":
                        clearLabelsAndData();

                        generateNewChart($scope.daily);
                        $scope.loader = false;
                        break;
                    case "weekly":
                        clearLabelsAndData();

                        generateNewChart($scope.weekly);
                        $scope.loader = false;
                        break;

                    case "monthly":
                        clearLabelsAndData();

                        generateNewChart($scope.monthly);
                        $scope.loader = false;
                        break;

                    case "yearly":
                        clearLabelsAndData();

                        generateNewChart($scope.yearly);
                        $scope.loader = false;
                        break;

                }


                $scope.onClick = function (points, evt) {
                    console.log(points, evt);
                };
            }
        }

        $scope.print = function () {
            window.print();
        };
    }
]);