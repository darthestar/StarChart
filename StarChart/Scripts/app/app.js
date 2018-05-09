var app = angular.
    module("main", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider.when("/home", {
        templateUrl: '/scripts/app/pages/dashboard.html',
        controller: 'homeController'
    });
});

app.config(function ($routeProvider){
    $routeProvider.when("/home/:productID", {
        templateUrl: '/scripts/app/pages/products.html',
        controller: 'productViewController'
    });

    $routeProvider.otherwise({ redirectTo: "/home" });
});


