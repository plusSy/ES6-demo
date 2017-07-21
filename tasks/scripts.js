import gulp from 'gulp';
import gulpif from 'gulp-if';
import concat from 'gulp-concat';
import webpack from 'webpack';
import gulpWebpack from 'webpack-stream';
import named from 'vinyl-named'; //重命名
import livereload from 'gulp-livereload'; //热更新
import plumber from 'gulp-plumber'; //处理文件流
import rename from 'gulp-rename'; //对文件重命名
import uglify from 'gulp-uglify'; //压缩js/css
import {log,colors} from 'gulp-util'; //命令行输出 色彩
import args from './util/args'; //对命令行参数进行解析的包

gulp.task('scripts',()=>{
    return gulp.src(['app/js/index.js'])
        .pipe(plumber({
            errorHandler:function(){

            }
        }))
        .pipe(named())
        .pipe(gulpWebpack({
            module:{
                loaders:[{
                    test:/\.js$/,
                    loader:'babel'
                }]
            }
        }),null,(err,states)=>{
            log(`Finished','${colors.cyan('scripts')}'`,states.toString({
                chunks: false
            }))
        })
        .pipe(gulp.dest('server/public/js'))
        .pipe(rename({
            basename:'cp',
            extname:'.min.js'
        }))
        .pipe(uglify({compress:{properties:false}, output:{'quote_keys':true}}))
        .pipe(gulp.dest('server/public/js'))
        .pipe(gulpif(args.watch,livereload()))
})