"use strict";

var app = angular.module('', []);

app.controller=('CommentCtrl', function ($scope) {
	$scope.comments = [
		'Hey, I\'m a comment',
		'Hi, I love comments',
		'Me too'
	];

	$scope.add = function (e) { // e for event
		if (e.which && e.which === 13) { // 13 = Enter
			$scope.comments.push($scope.newComment);
			$scope.newComment = '';
		}
	};
});
