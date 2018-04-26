tempApp.filter('temparatureFilter',[function(){
	return function(tempArray){
		console.log("---inside filter----");
		var filteredArray = [];
		angular.forEach(tempArray,function(value,key){
			console.log("--forEach--- " + value);
			if(value.temp >= 15){
				console.log("temp to return = " + value.temp);
				filteredArray.push(value);
			}
		});
		return filteredArray;
	};
}])
.filter('filterTempWithMinimum',[function(){
	console.log("---inside filter----");
	return function(tempArray,minTemp){
		console.log("---min temp----" + minTemp);
		var resultArr = [];
		angular.forEach(tempArray,function(value){
			if(value.temp > minTemp){
				resultArr.push(value);
			}
		});
		return resultArr;
	}
}]);