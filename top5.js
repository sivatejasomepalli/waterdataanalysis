var app = angular.module("app",[]);

app.controller('MainCtrl',function ($scope,$http) {

    $http.get("https://data.kcmo.org/resource/cyqf-nban.json?department=Water%20Services&$select=count(case_id),zip_code&$group=zip_code&$order=count(case_id)%20DESC&$limit=5").then(function (value) {

        $scope.kcvalue = value.data;
        console.log($scope.kcvalue);
        $scope.mydata64028 = parseInt($scope.kcvalue[0].count_case_id);
        $scope.mydata64082 = parseInt($scope.kcvalue[1].count_case_id);
        $scope.mydata64167 = parseInt($scope.kcvalue[2].count_case_id);
        $scope.mydata64055 = parseInt($scope.kcvalue[3].count_case_id);
        $scope.mydata64030 = parseInt($scope.kcvalue[4].count_case_id);
        drawChart();

    });


    google.charts.load('current', {packages:['bar']});
    google.charts.setOnLoadCallback(drawChart);


    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['zipcode','requests'],
            ['64028',  $scope.mydata64028],
            ['64082',  $scope.mydata64082],
            ['64167',  $scope.mydata64167],
            ['64055',  $scope.mydata64055],
            ['64030',  $scope.mydata64030]
        ]);

        var options = {
            title: 'Water service requests'
        };

        var chart = new google.charts.Bar(document.getElementById('barchart_values'));

        chart.draw(data, options);
    }

});