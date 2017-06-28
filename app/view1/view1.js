	/* 
	  Created By Sumit Mendiratta
	*/

	'use strict';

	angular.module('myApp.view1', ['ngRoute'])

	.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/view1', {
	    templateUrl: 'view1/view1.html',
	    controller: 'View1Ctrl'
	  });
	}])


	.controller('View1Ctrl', ['$scope','$http',function($scope, $http) {
	//file deployed on AWS S3 Bucket
		 $http.get("https://s3-us-west-2.amazonaws.com/awsproductsumit/products/products.json")
	    .then(function(response) {
	        $scope.products = response.data.products;
	    });

	}]);

