var gulp = require('gulp');

var mocha = require('gulp-mocha');

/* Tests */
gulp.task('test', ['mocha']);

gulp.task('watch', function() {
	// Run server-side tests whenever a server-side test changes
	gulp.watch(['lib/**/*.js', '!lib/**/*.test.js'], ['mocha']);
});

gulp.task('mocha', function() {
	// Run server-side tests once
	return gulp
		.src(['lib/**/*.spec.js'])
		.pipe(mocha());
});
