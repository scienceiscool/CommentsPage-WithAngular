var app = angular.module('CommentsPage', []);

app.controller('CommentCtrl', function ($scope) {
	$scope.commentsList = [
		'Hey, I\'m a comment',
		'Hi, I love comments',
		'Me too'
	];

	// reference: http://codepen.io/TheLarkInn/post/angularjs-directive-labs-ngenterkey
	$scope.checkIfEnterKeyWasPressed = function($e){
		var keyCode = $e.which || $e.keyCode;
		if (keyCode === 13 && $scope.newComment !== '') {
			$scope.commentsList.push($scope.newComment);
			$scope.newComment = '';
		}
	};

	$scope.addCommentFromInputBox = function () {
		if ($scope.newComment !== '') {
			$scope.commentsList.push($scope.newComment);
			$scope.newComment = '';
		}
	};
});
