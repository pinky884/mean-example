tempApp.directive('tempChart', [function(version) {
return {
	template: '<div id="container"></div>',
	link: function(scope, element, attrs) {
		var chart = new Morris.Line({
		// ID of the element in which to draw the chart.
		element: 'container',
		// The name of the data record attribute that contains
		x-values.
		xkey: 'date',
		// A list of names of data record attributes that contain
		y-values.
		ykeys: ['temp'],
		// Labels for the ykeys -- will be displayed when you hover
		over the
		// chart.
		labels: ['Temperature']
		});
		scope.$watch(function() {
			chart.setData(angular.copy(JSON.parse(attrs.data)));
		});
	}
}
}]);