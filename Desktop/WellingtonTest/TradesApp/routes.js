tradesApp.config(function($routeProvider){
    $routeProvider
        .when("/",
            {
                templateUrl : "pages/trades.htm",
                controller : "tradesController"
            }
        )
        .when("/trades",
            {
                templateUrl : "pages/trades.htm",
                controller : "tradesController"
            }
        )
});