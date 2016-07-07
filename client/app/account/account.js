'use strict';

angular
	.module('UMT')
	.config(function ($stateProvider) {

		$stateProvider
			.state('login', {
				url: '/login',
				controller: 'LoginCtrl',
				templateUrl: 'app/account/login/login.html'
			})
			.state('createAccount', {
				url: '/createAccount',
				controller: 'SignUpCtrl',
				templateUrl: 'app/account/signup/signup.html'
			})
			.state('forgot-password', {
				url: '/forgot-password',
				controller: 'ForgetPasswordCtrl',
				templateUrl: 'app/account/forgetPassword/forget-password.html'
			});


	});
