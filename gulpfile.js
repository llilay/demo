let gulp = require('gulp');
let sass = require('gulp-sass');

gulp.task('scripts', function() {
    gulp.src(['assets/js/**/*.js'])
    // 执行拼接，压缩，等。
        .pipe(gulp.dest('styles/js'));

});

gulp.task('styles', function() {
    return gulp.src(['assets/sass/**/*.scss'])// 读取style.scss文件的内容
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))// 定义Sass文件编译过程中发生错误的响应处理(如果没有它，一旦发生错误则直接退出脚本)
        .pipe(gulp.dest('styles/css')); // 编译后的css文件保存在css目录下
});

gulp.task('watch', function() {
    // Watch .scss files
    gulp.watch('assets/sass/**/*.scss', ['styles']);
    // Watch .js files
    // gulp.watch('assets/js/**/*.js', ['scripts']);
    // Watch image files
    // gulp.watch('src/images/**/*', ['images']);
});

gulp.task('build', ['watch']);

gulp.task('default', ['styles']);