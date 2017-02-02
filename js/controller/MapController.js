
app.controller('MapCtrl', function($scope, $route, $routeParams, $location, FetchService ) {

    //var url = 'http://dltweb.befirst-it.com/dltgps/web/map_mobile/map_search.php?unit_id={carID}&data_show={"avg_speed":"54","over_speed_count":"0","driver_id":" - ","start_datetime":"{starttime}","end_datetime":"{endtime}","car_info_other1":""}';
    var url = 'http://dltweb.befirst-it.com/dltgps/web/map_mobile/map_search.php?unit_id={carID}';
    
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;

    var key = $routeParams.key;
    var last = new Date();
    //var starttime = dateFormat(new Date(last.setDate(last.getDate() - 1)), "HH:MM dd/mm/yyyy"); // day
    var starttime = dateFormat(new Date(last.setHours(last.getHours() - 1)), "HH:MM dd/mm/yyyy"); // hour
    var endtime = dateFormat(new Date(), "HH:MM dd/mm/yyyy");
    var final_url = url.replace('{carID}', key).replace('{starttime}', starttime).replace('{endtime}' , endtime);

    $scope.finalLink = final_url;
    $scope.isShowLoadingGif = true;
    $scope.iframeLoadedCallBack = function(){
        $scope.isShowLoadingGif = false;
    }

    //18:01 20/12/2016
    // 007000000000000TE5812212210
    // $scope.get
});