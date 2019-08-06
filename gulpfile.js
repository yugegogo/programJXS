var gulp = require("gulp");
var concat=require("gulp-concat");
var uglify=require("gulp-uglify");
var minimg=require("gulp-imagemin");
var mincss=require("gulp-minify-css");
var rename=require("gulp-rename");
var babel=require("gulp-babel");
var sass=require("gulp-sass");
// 复制
// 压缩

// 监听
// 监听所有html

// 监听所有js
// 监听所有img监听所有font
// 监听所有img
gulp.task("watchall",async ()=>{
	// 监听html并且复制
	gulp.watch("*.html",async ()=>{
		gulp.src("*.html").pipe(gulp.dest("D:\\phpStudy\\WWW\\programJXS"))

	})
	// 监听sass,编译并复制
	gulp.watch("sass/**/*",async ()=>{
		gulp.src("sass/**/*").pipe(sass()).pipe(gulp.dest("D:\\phpStudy\\WWW\\programJXS\\css"))

	})

	// 监听font并复制
	gulp.watch("font/**/*",async ()=>{
		gulp.src("font/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\programJXS\\font"))

	})
	// 监听img 压缩后复制
	gulp.watch("img/**/*",async ()=>{
		gulp.src("img/**/*").pipe(minimg()).pipe(gulp.dest("D:\\phpStudy\\WWW\\programJXS\\img"))

	})
	// 监听js 压缩后复制
	gulp.watch("js/**/*",async ()=>{
		gulp.src("js/**/*")
		.pipe(babel({
			presets:['es2015']

		}))
		.pipe(uglify()).pipe(gulp.dest("D:\\phpStudy\\WWW\\programJXS\\js"))

	})
	// 监听php复制
	gulp.watch("php/**/*",async ()=>{
		gulp.src("php/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\programJXS\\php"))

	})
	//监听sql并复制
	gulp.watch("sql/**/*",async ()=>{
		gulp.src("sql/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\programJXS\\sql"))

	})

})