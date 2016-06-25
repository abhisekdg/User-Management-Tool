'use strict';

angular.module('UMT')
	.controller('NavbarCtrl', function ($scope, $document, $log) {
		$scope.sidebarHideShow = "sidebar-active";

		$scope.onNavbarMenuToggleClick = function () {

			if ($scope.sidebarHideShow === 'sidebar-active')
				$scope.sidebarHideShow = 'sidebar-disabled';
			else
				$scope.sidebarHideShow = 'sidebar-active';
		};


		$document.bind("click", function (event) {
			$log.info(event);
			if (event.target.nodeName === 'BODY') {
				if ($scope.sidebarHideShow === 'sidebar-active') {
					$scope.$apply(function () {
						$scope.sidebarHideShow = 'sidebar-disabled';
					});
				}
			}
		});
	});
