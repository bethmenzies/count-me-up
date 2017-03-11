countMeUp.factory('votesFactory', function($http) {
	var factory = {};
	var votes = [];

	factory.getVotes = function() {
		votes = $http.get('models/votes.json?' + new Date().getTime());
		return votes;
	}

	return factory;
})