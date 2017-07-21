import yargs from 'yargs';

const args = yargs

    .option('production',{ //区分开发环境与线上环境、false 默认为开发环境
        boolean:true,
        default:false,
        describe:'min all scripts'
    })

    .option('watch',{ //监听文件的变化
        boolean:true,
        default:false,
        describe:'watch all files'
    })

    .option('verbose',{ //详细输出命令行的日志
        boolean:true,
        default:false,
        describe:'log all '
    })

    .option('sourcemaps',{
        descript:'force the creation of sourcemaps'
    })

    .option('port',{ //设置服务端口
        string:true,
        default:'8080',
        describe:'sever port'
    })

    .argv //表示输入的命令行以字符串进行解析