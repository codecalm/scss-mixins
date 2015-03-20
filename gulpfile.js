var gulp         = require( 'gulp' ),
    watch        = require( 'gulp-watch' ),
    sass         = require( 'gulp-sass' ),
    util         = require( 'gulp-util' );




gulp.task( 'styles', function () {
    return gulp.src( './tests/*.scss' )
        .pipe( sass( {
            outputStyle: 'nested',
            onError: function (error) {
                util.log(util.colors.red('Error: ' + error.message));
                util.log('File: ' + util.colors.red(error.file + ':'  + error.line));
                util.beep();
            }
        }))
        .pipe( gulp.dest( './tests' ) );
});

gulp.task( 'watch', function () {
    gulp.watch( './tests/**/*.scss', [ 'styles' ] );
    gulp.watch( './src/**/*.scss', [ 'styles' ] );
});

gulp.task( 'test', [ 'styles', 'watch' ] );