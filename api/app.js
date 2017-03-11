var countMeUp = angular.module('countMeUp', ['ngRoute']);
countMeUp.config(function($routeProvider) {
	$routeProvider
	.when('/', 
		{
			controller: 'VotesController', 
			templateUrl:'views/votes.html'
		}
	);
});