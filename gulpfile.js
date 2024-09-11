const gulp = require('gulp');
const sass_funcao = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify')
const comprimeImagem = require('gulp-imagemin')


function comprimeJs() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'))
}

function compilaSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sass_funcao({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('./build/styles'))
}

function comprimeImgs() {
    return gulp.src('./source/images/*')
        .pipe(comprimeImagem())
        .pipe(gulp.dest('./build/images'))
}


exports.default = function() {
    gulp.watch('./source/styles/*.scss', { ignoreInitial: false }, compilaSass);
    gulp.watch('./source/scripts/*.js', { ignoreInitial: false }, comprimeJs);
    gulp.watch('./source/images/*', { ignoreInitial: false }, comprimeImgs);