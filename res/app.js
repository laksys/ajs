angular
.module('myapp',['ngRoute'])

.controller('firstCtrl',['$scope', function($scope){
	$scope.title = "lakshmaan"
}])

.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/first', {
		template: `<h1>Hi laksys Welcom eall</h1>`
	})
	.when('/second', {
		template: `<h2>Welcome to wonderful world of computers!</h2>`
	})
}])
