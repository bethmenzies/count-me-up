describe('VotesController', function() {
	beforeEach(module('countMeUp'));

	var votesFactory;
	var deferred;

	beforeEach(inject(function($q, _votesFactory_) {
		deferred = $q.defer();
		votesFactory = _votesFactory_;
		spyOn(votesFactory, 'getVotes').and.returnValue(deferred.promise);
	}));

	var controller;
	var $scope;

	beforeEach(inject(function($rootScope, $controller) {
		$scope = $rootScope.$new();
		controller = $controller('VotesController', {
			$scope: $scope,
			votesFactory: votesFactory
		});
	}));

	it('should exist', function() {
		expect(controller).toBeDefined();
	});

	describe('init', function() {

		it('should exist', function() {
			expect(controller.init).toBeDefined
		});
		it('should be a function', function() {
			expect(angular.isFunction(controller.init)).toBe(true);
		})

		it('should call the factory', function() {
			controller.init();
			expect(votesFactory.getVotes).toHaveBeenCalled();
		});

		it('should call getVoteCount on success', function() {
			var result = {'data': {'votes': 'success'}};
			deferred.resolve(result);
			$scope.$digest();
			controller.init();
			expect($scope.voteCount).toEqual('Technical Difficulties');
		});

		it('should not call getVoteCount on failure', function() {
			spyOn(controller, 'getVoteCount');
			deferred.reject(404);
			$scope.$digest();
			controller.init();
			expect(controller.getVoteCount).not.toHaveBeenCalled();
		})
	});

	describe('getVoteCount', function() {
		it('should exist', function() {
			expect(controller.getVoteCount).toBeDefined();
		});

		it ('should be a function', function() {
			expect(angular.isFunction(controller.getVoteCount)).toBe(true);
		});

		it('should set $scope.voteCount when called', function() {
			votes = [["candidate-1"]];
			controller.getVoteCount(votes);
			expect($scope.voteCount).toEqual({'candidate-1': 1});
		});

		it('should set $scope.voteCount when called with multiple votes', function() {
			votes = [["candidate-1"], ["candidate-2"]];
			controller.getVoteCount(votes);
			expect($scope.voteCount).toEqual({'candidate-1': 1, 'candidate-2': 1});
		});

		it('should set $scope.voteCount when called with multiple votes for the same candiadate', function() {
			votes = [["candidate-1"], ["candidate-1"]];
			controller.getVoteCount(votes);
			expect($scope.voteCount).toEqual({'candidate-1': 2});
		});

		it('should set $scope.voteCount when called with one user having multiple votes', function() {
			votes = [["candidate-1", "candidate-2"]];
			controller.getVoteCount(votes);
			expect($scope.voteCount).toEqual({'candidate-1': 1, 'candidate-2': 1});
		});

		it('should set $scope.voteCount when called with one user voting multiple times for the same candidate', function() {
			votes = [["candidate-1", "candidate-1"]];
			controller.getVoteCount(votes);
			expect($scope.voteCount).toEqual({'candidate-1': 2});
		});

		it('should not count a vote when a user has voted more than three times', function() {
			votes = [["candidate-1", "candidate-2", "candidate-3", "candidate-4"]];
			controller.getVoteCount(votes);
			expect($scope.voteCount).toEqual({'candidate-1': 1, 'candidate-2': 1, 'candidate-3': 1});
		});

		it('should set $scope.voteCount as Technical Difficulties if votes is not an array', function() {
			votes = {"vote": "candidate-1"};
			controller.getVoteCount(votes);
			expect($scope.voteCount).toEqual('Technical Difficulties');
		});

		it('should set $scope.voteCount as Technical Difficulties if votes[userVote] is not an array', function() {
			votes = [{'candidate-1': 1}];
			controller.getVoteCount(votes);
			expect($scope.voteCount).toEqual('Technical Difficulties');
		});

		it('should set $scope.voteCount as Technical Difficulties if votes[userVote][i] is not a string', function() {
			votes = [[1, 2]];
			controller.getVoteCount(votes);
			expect($scope.voteCount).toEqual('Technical Difficulties');
		});
	});

	describe('$scope.showVotes', function() {
		it('should exist', function() {
			expect($scope.showVotes).toBeDefined();
		});

		it('should be a function', function() {
			expect(angular.isFunction($scope.showVotes)).toBe(true);
		});

		it('should set $scope.showVote to true when called', function() {
			$scope.showVotes();
			expect($scope.showVote).toBe(true);
		});
	});
});