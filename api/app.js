var countMeUp = angular.module('countMeUp', ['ngRoute']);
countMeUp.config(function($routeProvider) {
	$routeProvider
	.when('/', 
		{
			controller: 'HomeController', 
			templateUrl:'views/home.html'
		}
	)
	.when('/:numberOfVotes', 
		{
			controller: 'VotesController',
			templateUrl:'views/votes.html'
		}
	);
});