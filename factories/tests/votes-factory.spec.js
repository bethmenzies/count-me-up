describe('votesFactory', function() {
	beforeEach(angular.mock.module('countMeUp'));

	var factory;

	beforeEach(inject(function(_votesFactory_) {
		factory = _votesFactory_;
	}));

	it('should exist', function() {
		expect(factory).toBeDefined();
	});

	describe('getVotes', function() {
		it('should exist', function() {
			expect(factory.getVotes).toBeDefined();
		});

		it('should do a get request', inject(function($httpBackend) {
			$httpBackend
				.when('GET', 'models/votes.json?')
				.respond(200, 'success')
			factory.getVotes().then(function(response) {
				expect(response.data).toEqual('success');
			});
			$httpBackend.flush();
		}));
	});
});