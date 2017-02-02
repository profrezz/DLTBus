app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when("/", {
        templateUrl : "js/view/main.html",
        controller: 'BookController',
      })
      .when("/red", {
        templateUrl : "red.html"
      });
    //    .otherwise({
	//  	redirectTo: 'google.html'
    //    });

    // $locationProvider.html5Mode({
    //     enabled: true,
    //     requireBase: false
    // });
});