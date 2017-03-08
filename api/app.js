var countMeUp = angular.module('countMeUp', ['ng-route']);
countMeUp.config(function($routeProvider)) {
	$routeProvider.when('/', {controller:, templateUrl:}).when('/:numberOfVotes', {controller:, templateUrl:});
});