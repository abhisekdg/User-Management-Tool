'use strict';

angular
	.module('UMT')
	.controller('LoginCtrl', function ($scope, $log) {
		$scope.master = {};

		$scope.reset = function () {
			$scope.user = angular.copy($scope.master);
		};

		$scope.loginSubmit = function () {
			var uEmail = $scope.user.email;
			var uPass = $scope.user.password;

			$log.info(uEmail);
			$log.info(uPass);
		};

		$scope.reset();

	});
