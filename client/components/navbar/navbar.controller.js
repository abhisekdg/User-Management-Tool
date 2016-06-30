'use strict';

angular.module('UMT')
	.controller('NavbarCtrl', function ($scope, $document, $log) {

		$scope.isNavbarActive = false;
		$scope.onNavbarMenuToggleClick = function () {

			if ($scope.isNavbarActive) {
				$scope.isNavbarActive = false;
			} else {
				$scope.isNavbarActive = true;
			}
		};

		$document.bind('click', function (event) {
			$log.info($scope.isNavbarActive);
			if (event.target.nodeName === 'BODY') {
				$scope.$apply(function () {
					if ($scope.isNavbarActive) {
						$scope.isNavbarActive = false;
					}
				});
			}
		});
	});
