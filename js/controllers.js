'use strict'

tempApp.controller('currentCtrl', ['$scope', function($scope){
	$scope.temp = -1;
}]);

tempApp.controller('mainCtrl', ['$scope','$state','$location', function($scope,$state,$location){
	$scope.test = "hello";

	$scope.showCurrentTemp = function(){
		console.log("show current temperature!!!");
		//$state.go('current');
		$location.path('current');
	};

	$scope.showHistory = function(){
		console.log("showing history");
		//$state.go("history");
		$location.path("history");
	};

	$scope.showChart = function(){
		console.log("showing chart!");
		//$state.go('showChart');
		$location.path('showChart');
	};
}])

tempApp.controller('historyCtrl',['$scope',function($scope){
	$scope.text = 'this is history page!';
	$scope.historyData = [
		{ day: 'saturday', temp: 8},
		{ day: 'sunday', temp: 13},
		{ day: 'monday',temp: 15},
		{ day: 'tuesday', temp: 11},
		{ day: 'wednesday',temp: 15},
		{ day: 'thursday',temp: 17},
		{ day: 'friday',temp: 21}
		];

}]);

tempApp.controller('tempChartCtrl', ['$scope', function($scope){
	$scope.showChart = "true";
	$scope.historyData = [
		{ day: 'saturday', temp: 8},
		{ day: 'sunday', temp: 13},
		{ day: 'monday',temp: 15},
		{ day: 'tuesday', temp: 11},
		{ day: 'wednesday',temp: 15},
		{ day: 'thursday',temp: 17},
		{ day: 'friday',temp: 21}
	];

}]);

//raiseAlert.sh under common/fileMonitor

