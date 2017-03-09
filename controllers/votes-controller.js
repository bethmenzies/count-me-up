countMeUp.controller("VotesController", ['$scope', '$routeParams', '$location', function($scope, $routeParams, $location) {
	$scope.numberOfVotes = $routeParams.numberOfVotes;
	var candidatePercentages = $location.search();
	console.log(candidatePercentages);
}]);