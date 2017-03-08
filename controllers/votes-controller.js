countMeUp.controller("VotesController", ['$scope', '$routeParams', function($scope, $routeParams) {
	$scope.numberOfVotes = $routeParams.numberOfVotes;
}]);