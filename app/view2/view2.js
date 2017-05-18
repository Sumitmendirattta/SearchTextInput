'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope','$http',function($scope, $http) {

	 $http.get("url")
    .then(function(response) {
    	//alert(response.data.images[0]);
    	//console.log(response.data.images[0]);
        $scope.attachImages = response.data.images;
    });

}]);