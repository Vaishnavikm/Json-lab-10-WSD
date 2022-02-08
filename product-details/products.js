var myapp = angular.module('productss', []);
/*Dependency Injection*/
myapp.controller('productctrl1', function ($scope, $http) {
  $http.get('https://vaishnavikm.github.io/json-file-/getproducts.json')
    .success(function (response) {
      $scope.names = response.products;
      $scope.rowlimit = 8;
    }
    );
});