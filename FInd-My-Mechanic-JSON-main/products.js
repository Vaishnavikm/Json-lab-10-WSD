var myapp = angular.module('products', []);
      /*Dependency Injection*/
      myapp.controller('productctrl1',function($scope,$http)
{
   $http.get('https://vaishnavikm.github.io/Json-lab-10-WSD/getproducts.json')
   .success(function(response)
{
  $scope.names=response.inventory;
  $scope.rowlimit=8;
}
);
});