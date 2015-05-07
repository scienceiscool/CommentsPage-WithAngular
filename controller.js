var app = angular.module('CommentsPage', []);

app.controller('CommentCtrl', function ($scope) {
	$scope.commentsList = [
		'Hey, I\'m a comment',
		'Hi, I love comments',
		'Me too'
	];

	$scope.add = function () { 
		if ($scope.newComment !== '') {
			$scope.commentsList.push($scope.newComment);
			$scope.newComment = '';
		}
	}
});

/*
	$scope.add = function ($e) { 
		if (e.which && e.which === 13) { // 13 = Enter
			$scope.commentsList.push($scope.newComment);
			$scope.newComment = '';
		} else {
			if ($scope.newComment !== '') {
					$scope.commentsList.push($scope.newComment);
					$scope.newComment = '';
			}
		}
	};
});
*/
