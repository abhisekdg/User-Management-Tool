'use strict';

angular.module('UMT')
	.controller('NavbarCtrl', function ($scope, $document, $log) {

		$scope.isNavbarActive = true;
		$scope.onNavbarMenuToggleClick = function () {

			if ($scope.isNavbarActive) {
				$scope.isNavbarActive = true;
			} else {
				$scope.isNavbarActive = false;
			}
		};

	});
