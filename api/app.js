var countMeUp = angular.module('countMeUp', ['ng-route']);
countMeUp.config(function($routeProvider)) {
	$routeProvider
	.when('/', 
		{
			controller: 'controllers/home-controller.js', 
			templateUrl:'views/home.html'
		}
	)
	.when('/:numberOfVotes', 
		{
			controller: 'controllers/votes-controller.js',
			templateUrl:'views/votes.html'
		}
	);
});