'use strict';

var app = angular.module('UMT', ['ui.router']);
app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/');

});
