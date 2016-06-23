'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var gls = require('gulp-live-server');

gulp.task('eslint', function () {

	return gulp.src(['client/**/*.html',
			'gulpfile.js'
		])
		.pipe($.eslint())
		.pipe($.eslint.format())
		.pipe($.eslint.failOnError());
});

gulp.task('serve', function () {
	/*1. run your script as a server */
	var server = gls('server/app.js', {
		env: {
			NODE_ENV: 'development'
		}
	}, false);
	server.start();

	browserSync.init({
		proxy: 'http://localhost:9000'
	});

	gulp.watch(['client/*.html'], reload);
	gulp.watch(['client/css/**/*.css'], ['styles', reload]);
	gulp.watch(['client/images/**/*'], reload);
});


gulp.task('serve:prod', ['default'], function () {
	/*1. run your script as a server */
	var server = gls('server/app.js', {
		env: {
			NODE_ENV: 'production'
		}
	}, false);
	server.start();
});