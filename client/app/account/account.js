'use strict';

angular
	.module('UMT')
	.config(function ($stateProvider) {

		$stateProvider
			.state('login', {
				url: '/login',
				controller: 'LoginCtrl',
				templateUrl: 'app/account/login/login.html'
			});

	});
