var app = angular.module("app",[]);

app.controller('MainCtrl',function ($scope,$http) {

    $http.get("https://data.kcmo.org/resource/pbxi-bax5.json?$where=miles_of_water_main_replaced%3E7&$select=fiscal_year,miles_of_water_main_replaced&$order=fiscal_year").then(function (value) {

        $scope.kcvalue = value.data;
        console.log($scope.kcvalue);
        $scope.fiscal_year2012 = parseInt($scope.kcvalue[0].miles_of_water_main_replaced);
        $scope.fiscal_year2013 = parseInt($scope.kcvalue[1].miles_of_water_main_replaced);
        $scope.fiscal_year2014 = parseInt($scope.kcvalue[2].miles_of_water_main_replaced);
        $scope.fiscal_year2015 = parseInt($scope.kcvalue[3].miles_of_water_main_replaced);
        $scope.fiscal_year2016 = parseInt($scope.kcvalue[4].miles_of_water_main_replaced);
        drawChart();
    });

    google.charts.load("current", {packages: ["corechart"]});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Year', 'miles_of_water_main_replaced'],
            ['2012', $scope.fiscal_year2012 ],
            ['2013', $scope.fiscal_year2013 ],
            ['2014', $scope.fiscal_year2014 ],
            ['2015', $scope.fiscal_year2015 ],
            ['2016', $scope.fiscal_year2016 ]
        ]);

        var options = {
            title: 'City Wide Water Main Replaced',
            is3D: true,

        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
        chart.draw(data, options);
    }
});


