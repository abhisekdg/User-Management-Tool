'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var gls = require('gulp-live-server');

gulp.task('eslint', function () {

	return gulp.src(['client/**/*.html',
			'client/components/**/*.js',
			'client/app/**/*.js',
			'gulpfile.js'
		])
		.pipe($.eslint())
		.pipe($.eslint.format())
		.pipe($.eslint.failOnError());
});

gulp.task('serve', function () {
	var server = gls('server/app.js', {
		env: {
			NODE_ENV: 'development',
			PORT: 9000
		}
	}, false);
	server.start();

	browserSync.init({
		proxy: 'http://localhost:9000',
		port: 9804
	});

	gulp.watch(['client/*.html'], reload);
	gulp.watch(['client/css/*.css'], reload);
	gulp.watch(['client/images/*'], reload);
	gulp.watch(['client/components/**/*'], reload);
	gulp.watch(['client/app/**/*.js'], ['eslint'], reload);
});


gulp.task('serve:prod', function () {
	var server = gls('server/app.js', {
		env: {
			NODE_ENV: 'production',
			PORT: 9000
		}
	}, false);
	server.start();
});

gulp.task('default', ['serve'], function () {
	// place code for your default task here
	console.log('Starting default task !! ');
});
