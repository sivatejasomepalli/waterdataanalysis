
var app = angular.module("app",[]);
app.controller('MainCtrl',function ($scope,$http) {
    $http.get("https://data.kcmo.org/resource/cyqf-nban.json?department=Water%20Services&$select=count(case_id),zip_code&type=Manhole&$group=zip_code").then(function (value) {
        $scope.kcvalue = value.data;
        console.log($scope.kcvalue);
        $scope.zipcode64105 = parseInt($scope.kcvalue[0].count_case_id);
        $scope.zipcode64106 = parseInt($scope.kcvalue[1].count_case_id);
        $scope.zipcode64108 = parseInt($scope.kcvalue[2].count_case_id);
        $scope.zipcode64109 = parseInt($scope.kcvalue[3].count_case_id);
        $scope.zipcode64110 = parseInt($scope.kcvalue[4].count_case_id);
        $scope.zipcode64111 = parseInt($scope.kcvalue[5].count_case_id);
        $scope.zipcode64112 = parseInt($scope.kcvalue[6].count_case_id);
        $scope.zipcode64113 = parseInt($scope.kcvalue[7].count_case_id);
        $scope.zipcode64114 = parseInt($scope.kcvalue[8].count_case_id);
        $scope.zipcode64116 = parseInt($scope.kcvalue[9].count_case_id);
        $scope.zipcode64117 = parseInt($scope.kcvalue[10].count_case_id);
        $scope.zipcode64118 = parseInt($scope.kcvalue[11].count_case_id);
        $scope.zipcode64119 = parseInt($scope.kcvalue[12].count_case_id);
        $scope.zipcode64120 = parseInt($scope.kcvalue[13].count_case_id);
        $scope.zipcode64123 = parseInt($scope.kcvalue[14].count_case_id);
        $scope.zipcode64124 = parseInt($scope.kcvalue[15].count_case_id);
        $scope.zipcode64125 = parseInt($scope.kcvalue[16].count_case_id);
        $scope.zipcode64126 = parseInt($scope.kcvalue[17].count_case_id);
        $scope.zipcode64127 = parseInt($scope.kcvalue[18].count_case_id);
        $scope.zipcode64128 = parseInt($scope.kcvalue[19].count_case_id);
        $scope.zipcode64129 = parseInt($scope.kcvalue[20].count_case_id);
        $scope.zipcode64130 = parseInt($scope.kcvalue[21].count_case_id);
        $scope.zipcode64131 = parseInt($scope.kcvalue[22].count_case_id);
        $scope.zipcode64132 = parseInt($scope.kcvalue[23].count_case_id);
        $scope.zipcode64133 = parseInt($scope.kcvalue[24].count_case_id);
        $scope.zipcode64134 = parseInt($scope.kcvalue[25].count_case_id);
        $scope.zipcode64136 = parseInt($scope.kcvalue[26].count_case_id);
        $scope.zipcode64137 = parseInt($scope.kcvalue[27].count_case_id);
        $scope.zipcode64138 = parseInt($scope.kcvalue[28].count_case_id);
        $scope.zipcode64145 = parseInt($scope.kcvalue[29].count_case_id);
        $scope.zipcode64151 = parseInt($scope.kcvalue[30].count_case_id);
        $scope.zipcode64152 = parseInt($scope.kcvalue[31].count_case_id);
        $scope.zipcode64153 = parseInt($scope.kcvalue[32].count_case_id);
        $scope.zipcode64154 = parseInt($scope.kcvalue[33].count_case_id);
        $scope.zipcode64155 = parseInt($scope.kcvalue[34].count_case_id);
        $scope.zipcode64156 = parseInt($scope.kcvalue[35].count_case_id);
        $scope.zipcode64157 = parseInt($scope.kcvalue[36].count_case_id);
        $scope.zipcode64158 = parseInt($scope.kcvalue[37].count_case_id);
        $scope.zipcode64161 = parseInt($scope.kcvalue[38].count_case_id);
        $scope.zipcode64163 = parseInt($scope.kcvalue[39].count_case_id);
        drawChartx();

    });

    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawChartx);

    function drawChartx() {
        var data = google.visualization.arrayToDataTable([
            ['Zipcode', 'Kansas City'],
            ['64105', $scope.zipcode64105],
            ['64106', $scope.zipcode64106],
            ['64108', $scope.zipcode64108],
            ['64109', $scope.zipcode64109],
            ['64110', $scope.zipcode64110],
            ['64112', $scope.zipcode64112],
            ['64113', $scope.zipcode64113],
            ['64114', $scope.zipcode64114],
            ['64116', $scope.zipcode64116],
            ['64117', $scope.zipcode64117],
            ['64118', $scope.zipcode64118],
            ['64119', $scope.zipcode64119],
            ['64120', $scope.zipcode64120],
            ['64123', $scope.zipcode64123],
            ['64124', $scope.zipcode64124],
            ['64125', $scope.zipcode64125],
            ['64126', $scope.zipcode64126],
            ['64127', $scope.zipcode64127],
            ['64128', $scope.zipcode64128],
            ['64129', $scope.zipcode64129],
            ['64130', $scope.zipcode64130],
            ['64131', $scope.zipcode64131],
            ['64132', $scope.zipcode64132],
            ['64133', $scope.zipcode64133],
            ['64134', $scope.zipcode64134],
            ['64136', $scope.zipcode64136],
            ['64137', $scope.zipcode64137],
            ['64138', $scope.zipcode64138],
            ['64145', $scope.zipcode64145],
            ['64151', $scope.zipcode64151],
            ['64152', $scope.zipcode64152],
            ['64153', $scope.zipcode64153],
            ['64154', $scope.zipcode64154],
            ['64155', $scope.zipcode64155],
            ['64156', $scope.zipcode64156],
            ['64157', $scope.zipcode64157],
            ['64158', $scope.zipcode64158],
            ['64161', $scope.zipcode64161],
            ['64163', $scope.zipcode64163]
        ]);
        var options = {
            title: 'Manhole requests '
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
    }

});
