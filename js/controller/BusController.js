
app.controller('BusCtrl', function($scope, $route, $routeParams, $location, $attrs, FetchService ) {
    //if (!$attrs.model) throw new Error("No model for modelController");
    $scope.DTLBus = [];
    //console.log(FetchService.getWords());
    FetchService.getWords("Get").then(function(response) {
        console.log(response);
        $scope.DTLBus = response.data;
    }, function(reason) {
        console.log('Failed: ' + reason);
    }, function(update) {
        console.log('Got notification: ' + update);
    });
    console.log($scope.DTLBus);
    $scope.selectBus = function(busId) {
        console.log(busId);
        //var dateFormat = require('dateformat');
        var now = new Date();
        var tt = dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");
        console.log(now, tt);
    }

$scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;

});