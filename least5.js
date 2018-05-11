var app = angular.module("app",[]);

app.controller('MainCtrl',function ($scope,$http) {

    $http.get("https://data.kcmo.org/resource/cyqf-nban.json?department=Water%20Services&$select=count(case_id),zip_code&$group=zip_code&$order=count(case_id)&$limit=5").then(function (value) {

        $scope.kcvalue = value.data;
        console.log($scope.kcvalue);
        $scope.mydata64102 = parseInt($scope.kcvalue[0].count_case_id);
        $scope.mydata64028 = parseInt($scope.kcvalue[1].count_case_id);
        $scope.mydata64030 = parseInt($scope.kcvalue[2].count_case_id);
        $scope.mydata64055 = parseInt($scope.kcvalue[3].count_case_id);
        $scope.mydata64068 = parseInt($scope.kcvalue[4].count_case_id);
        drawChart();

    });


    google.charts.load('current', {packages:['bar']});
    google.charts.setOnLoadCallback(drawChart);


    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['zipcode','requests'],
            ['64102',  $scope.mydata64102],
            ['64028',  $scope.mydata64028],
            ['64030',  $scope.mydata64030],
            ['64055',  $scope.mydata64055],
            ['64068',  $scope.mydata64068]
        ]);

        var options = {
            title: 'Water service requests'
        };

        var chart = new google.charts.Bar(document.getElementById('barchart_values'));

        chart.draw(data, options);
    }

});