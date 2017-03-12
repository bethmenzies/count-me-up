countMeUp.controller('VotesController', function($scope, votesFactory) {
	this.init = init;
	this.getVoteCount = getVoteCount;

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
		if (Object.prototype.toString.call(votes) !== '[object Array]') {
			$scope.voteCount = "Technical Difficulties";
			return;
		}
		for (var userVote = 0; userVote < votes.length; userVote++) {
			if (Object.prototype.toString.call(votes[userVote]) !== '[object Array]') {
				$scope.voteCount = "Technical Difficulties";
				return;
			}
			for (var i=0; i<votes[userVote].length; i++) {
				if (Object.prototype.toString.call(votes[userVote][i]) !== '[object String]') {
					$scope.voteCount = "Technical Difficulties";
					return;
				}
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
});