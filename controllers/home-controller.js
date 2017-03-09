countMeUp.controller("HomeController", function($scope) {
	$scope.getVoteCount = function() {
		$scope.showVotes = true;
		$scope.voteCount = {
			"candidate-1": 30,
			"candidate-2": 40,
			"candidate-3": 20,
			"candidate-4": 10
		};
	};
});