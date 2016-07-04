'use strict';

angular
	.module('UMT')
	.controller('LoginCtrl', function ($scope, $log) {
		$scope.user = {};

		$scope.loginSubmit = function () {
			var uEmail = $scope.user.email;
			var uPass = $scope.user.password;

			$log.info(uEmail);
			$log.info(uPass);
		};

	});
