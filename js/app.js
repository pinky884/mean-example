var tempApp = angular.module("tempApp",['ui.router'])
.config(['$urlRouterProvider','$stateProvider',function($urlRouterProvider,$stateProvider) {
	$urlRouterProvider.otherwise("/current");
	$stateProvider.state("current",{
		url: "/current",
		templateUrl:"/partials/current.html",
		controller:"currentCtrl"
	})
	.state("history",{
		url:"/history",
		templateUrl:"/partials/history.html",
		controller:"historyCtrl"
	})
	.state("showChart",{
		url:"/showChart",
		templateUrl:"/partials/temperature-chart.html",
		controller:"tempChartCtrl"
	});
	 //$stateProvider.state("history");
	// $routeProvider.when('/current',{
	// 	templateUrl:'/partials/current.html',
	// 	controller: 'currentCtrl'
	// });
	// $routeProvider.when('/history',{
	// 	templateUrl: '/partials/history.html',
	// 	controller: 'historyCtrl'
	// });
	// $routeProvider.otherwise({redirect: '/current'});
}]);
// .run(["$state",function($state){
// 	console.log("----run-----");
// 	$state.go('current');
// }]);