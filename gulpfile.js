var gulp 		= require('gulp'),
	uglify 		= require('gulp-uglifyjs'),
	reactify 	= require('reactify'),
	sourcemap 	= require('gulp-sourcemaps'),
	browserify	= require('gulp-browserify');


var paths = {
	scripts: './app/**/*.js',
};



gulp.task('watch', function () {
	gulp.watch(paths.scripts, ['scripts']);
});


gulp.task('scripts', function () {
	gulp.src('./app/application.js')
		.pipe(browserify({
			insertGlobals: true,
			debug: false,
			transform: [reactify],
			extensions: ['.jsx']
        }))
		.on('error', function(e){
			console.error(e);
			this.emit('end');
		})
		.pipe(uglify())
		.on('error', function(e){
			console.error(e);
			this.emit('end');
		})
		.pipe(gulp.dest('./js'));
});


gulp.task('default', ['watch', 'scripts']);