describe('Testing routes', function() {
	beforeEach(module('countMeUp'));

	var location, route, rootScope;

	beforeEach(inject(function(_$location_, _$route_, _$rootScope_) {
		location = _$location_;
		route = _$route_;
		rootScope = _$rootScope_;
	}));

	describe('Votes route', function() {
		beforeEach(inject(function($httpBackend) {
			$httpBackend.expect('GET', '/').respond(200);
		}));

		it('should load the votes page on successful load of /', function() {
			location.path('/');
			rootScope.$digest();
			expect(route.current.controller).toBe('VotesController');
		});
	});
});