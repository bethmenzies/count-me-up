countMeUp.controller("VotesController", function($scope, $routeParams, $location, votesFactory) {
	function init() {
		votesFactory.getVotes().then(
			function success(result) {
				var votes = result.data.votes;
				getVoteCount(votes);
			},
			function error(data) {
				console.log("error " + data.status);
			}
		);
	}

	function getVoteCount(votes) {
		var voteCount = {};
		for (var userVote = 0; userVote < votes.length; userVote++) {
			for (var i=0; i<votes[userVote].length; i++) {
				if (i == 3) break;
				if (voteCount[votes[userVote][i]] >= 1) {
					voteCount[votes[userVote][i]]++;
				} else {
					voteCount[votes[userVote][i]] = 1;
				}
			}
		}
		$scope.voteCount = voteCount;
	}

	$scope.showVotes = function() {
		$scope.showVote = true;
	}

	init();


	// $scope.numberOfVotes = $routeParams.numberOfVotes;
	// var candidatePercentages = $location.search();
	// $scope.getVoteCount = function() {
	// 	$scope.showVotes = true;
	// 	var voteCount = {};
	// 	for (var candidate in candidatePercentages) {
	// 		voteCount[candidate] = ($scope.numberOfVotes / 100)*candidatePercentages[candidate]; 
	// 	}
	// 	$scope.voteCount = voteCount;
	// };
});