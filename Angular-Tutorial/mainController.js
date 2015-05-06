//"use strict";

// Create the module
// [] is a dependency array (for other modules)
var app = angular.module('Todo', []);

// Create the controller
app.controller("TodoCtrl", function ($scope) {
	//$scope.message = "Hey there.";
	$scope.todos = [
		'Learn Sketch',
		'Look at Dribble and feel inferior',
		'Actually learn how to use the Pen tool'
	];
});
