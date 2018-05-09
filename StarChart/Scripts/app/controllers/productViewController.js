app.controller("productViewController", ["$scope", "$routeParams", "$http", function ($scope, $routeParams, $http) {
    console.log($routeParams);
    http({
        method: "GET",
        url: "/api/home/" + $routeParams.productID
    }).then(resp => {
        $scope.product = resp.data;
    })
}]);



