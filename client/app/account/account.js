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
			.state('forgetPassword', {
				url: '/forgetPassword',
				controller: 'ForgetPasswordCtrl',
				templateUrl: 'app/account/forgetPassword/forgetPassword.html'
			});


	});
