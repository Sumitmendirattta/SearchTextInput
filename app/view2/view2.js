'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope','$http',function($scope, $http) {

	 $http.get("https://s3-us-west-2.amazonaws.com/digicode-interview/Q2.json")
    .then(function(response) {
  
        $scope.attachImages = response.data.images;
    });

}]);