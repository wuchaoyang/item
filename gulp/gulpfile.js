/**
 * Created by 朝阳 on 2017/5/30.
 */
var gulp=require("gulp");
var uglify=require("gulp-uglify");
var concat=require("gulp-concat");
var sass=require("gulp-sass");
var server=require("gulp-webserver");

gulp.task("commpress",function(){
    gulp.src('./index.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dest'))
})

gulp.task("sass",function(){
    gulp.src("./style.sass")
        .pipe(sass())
        .pipe(gulp.dest('./dest'))
})

gulp.task("concat",function(){
    gulp.src(["index.js","index2.js"])
        .pipe(concat("concat.js"))
        .pipe(uglify())
        .pipe(gulp.dest("./dest"))
})

gulp.task("server",function(){
    gulp.src("./")
        .pipe(server({
            open:true,
            livereload: true,
            directoryListing:true
        }))
})