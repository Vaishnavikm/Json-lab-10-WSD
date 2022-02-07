var myapp = angular.module('Mechanic', []);
      /*Dependency Injection*/
      myapp.controller('Mechanicctrl',function($scope,$http)
{
   $http.get('https://vaishnavikm.github.io/WSD-lab-10-json/inventory.json')
   .success(function(response)
{
  $scope.names=response.inventory;
  $scope.rowlimit=8;
}
);
});