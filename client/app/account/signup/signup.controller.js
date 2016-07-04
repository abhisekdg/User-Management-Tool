'use strict';

angular
	.module('UMT')
	.controller('SignUpCtrl', function ($scope, $log) {

		$scope.user = {};

		$scope.signUp = function () {
			$log.info($scope.user);
		};

		$scope.passCheck = function () {

			if ($scope.user.pass !== $scope.user.cPass) {
				$scope.passMismatch = "Password does not match";
				$scope.formSignup.$invalid = true;
			} else {
				$scope.passMismatch = null;
				$scope.formSignup.$invalid = false;
			}

		};

	});
