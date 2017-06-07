var gulp = require('gulp');
var minifyHtml = require('gulp-minify-html');
var minifycss = require('gulp-clean-css');
var gulp= require("gulp");
var minifyjs= require("gulp-uglify");
var concat=require('gulp-concat');
var spritesmith=require('gulp.spritesmith');








gulp.task('htmltask',function(){
	gulp.src('*.html')
	.pipe(minifyHtml())
	.pipe(gulp.dest('dist'))
});

gulp.task('csstask',function(){
  gulp.src('./css/*.css')
  .pipe(minifycss ())
  .pipe(gulp.dest('./dist/css'))  ;//dist下新建css文件夹
});

gulp.task('jstask',function(){
		gulp.src('./js/*.js')  
		.pipe(minifyjs())   // 压缩
.pipe(concat('all.js')) // 合并后叫all.js
		.pipe(gulp.dest('./dist/js')) //输出到dist下js文件夹
	});
	

gulp.task('sprite',function(){
  gulp.src(['./img/*.png'])  //此处方括号，为数组，可以是多种格式，或者任意几张图片
  .pipe(spritesmith({
    imgName:'sprite.png', //生成大图的名字，注意加扩展名.png或.jpg
    cssName:'sprite.css'  //生成css文件名
  }))
  .pipe(gulp.dest('./dist/sprites'));
});

gulp.task('watch', function () {
    				gulp.watch('*.html', ['htmltask']); //监听文件名  任务名
    		    	gulp.watch('css/*.css', ['csstask']);
gulp.watch('js/*.js', ['jstask']);
			});









