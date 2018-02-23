
	var gulp = require("gulp");
	var connect = require("gulp-connect");
	var sass = require("gulp-sass");
	var concat = require("gulp-concat"); //合并文件
	//var uglify = require("gulp-uglify"); //压缩js
	var minifyCss = require("gulp-minify-css");//压缩CSS
	var rename = require("gulp-rename");
//-----------------------------------------copy-----------------------------------------------------------

	gulp.task("copyhtml",function(){
		return gulp.src("src/html/*").pipe(gulp.dest("dist/html")).pipe(connect.reload());
	});
	//对于非嵌套使用一个*号够用了,but复制某个文件夹下的所有东西,并包含嵌套文件夹的所有东西
	gulp.task("copycss",function(){
		return gulp.src("src/css/**/*").pipe(sass()).pipe(concat("all.css")).pipe(gulp.dest("dist/css")).pipe(minifyCss()).pipe(rename("all.min.css")).pipe(gulp.dest("dist/css")).pipe(connect.reload());
	});
	//另外.!为排除后面的某个文件.
	//pipe内的connect.reload功能为复制后通知浏览器更新.
	gulp.task("copyjs",function(){
		return gulp.src("src/js/*").pipe(gulp.dest("dist/js")).pipe(connect.reload());
	});  
	gulp.task("copyjq",function(){
		return gulp.src("src/js/jquery/jquery-3.2.1.min.js").pipe(gulp.dest("dist/js/jquery")).pipe(connect.reload());
	});
	//copy多个文件夹
	gulp.task("copyimg",function(){
		return gulp.src(["src/images/**/*","src/png/**/*"]).pipe(gulp.dest("dist/images"));
	});

//-----------------------------------------default--------------------------------------------------------
	//合并上面所有的任务
	gulp.task("default",["init","server","onwatch"],function(){
		console.log("ok");
	})
	gulp.task("init",["copyhtml","copycss","copyjs","copyimg","copyjq"]);

//-----------------------------------------server and onwatch---------------------------------------------


	gulp.task("server",function(){
		connect.server({
			port:8000,
			root:["dist"], //选择服务器的根目录
			livereload:true//开启了服务器通知更新功能
		});
	});
	//时时监听 watch
	gulp.task("onwatch",function(){
		gulp.watch("src/html/*.html",["copyhtml"]);
		gulp.watch("src/js/**/*",["copyjs"]);
		gulp.watch("src/css/**/*",["copycss"]); 
		gulp.watch("src/images/**/*",["copyimg"]);
		gulp.watch("src/php/**/*",["copyphp"]);
	});



