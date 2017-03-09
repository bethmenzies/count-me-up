countMeUp.controller("VotesController", ['$scope', '$routeParams', '$location', function($scope, $routeParams, $location) {
	$scope.numberOfVotes = $routeParams.numberOfVotes;
	var candidatePercentages = $location.search();
	$scope.getVoteCount = function() {
		$scope.showVotes = true;
		var voteCount = {};
		for (var candidate in candidatePercentages) {
			voteCount[candidate] = ($scope.numberOfVotes / 100)*candidatePercentages[candidate]; 
		}
		$scope.voteCount = voteCount;
	};
}]);