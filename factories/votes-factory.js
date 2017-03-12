countMeUp.factory('votesFactory', function($http) {
	var factory = {};
	var votes = [];

	factory.getVotes = function() {
		votes = $http.get('models/votes.json?');
		return votes;
	}

	return factory;
})