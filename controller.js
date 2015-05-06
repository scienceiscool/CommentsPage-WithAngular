var app = angular.module('CommentsPage', []);

app.controller=('CommentCtrl', function ($scope) {
	$scope.commentsList = [
		'Hey, I\'m a comment',
		'Hi, I love comments',
		'Me too'
	];

	// Note to self: if there's more time, add Enter key functionality
	$scope.add = function () { // e for event
		if ($scope.newComment !== null) {
			$scope.commentsList.push($scope.newComment);
			$scope.newComment = '';
		}
		/*if (e.which && e.which === 13) { // 13 = Enter
			$scope.commentsList.push($scope.newComment);
			$scope.newComment = '';
		} else {*/
			//if ($scope.newComment !== null) {
					//$scope.commentsList.push($scope.newComment);
					//$scope.newComment = '';
			//}
		//}
	};
});



