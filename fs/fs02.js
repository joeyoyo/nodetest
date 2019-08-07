var fs = require('fs');

//1.判断服务器上面有没有upload目录。没有创建这个目录。   （图片上传）
// fs.stat('upload',function (err,stats) {
//     if (err){
//         fs.mkdir('upload',function (error) {
//             if (error) {
//                 console.log(error);
//                 return false;
//             }
//             console.log('创建成功')
//         })
//     } else{
//         console.log('目录已经存在');
//         console.log(stats.isDirectory());
//     }
// });

//2. 找出html目录下面的所有的目录，然后打印出来
var filesArr = [];
fs.readdir('html', function (err, files) {
    if (err) {
        console.log(err);

    } else {  /*判断是目录还是文件夹*/
        console.log(files);  /*数组*/
        //用匿名自运行函数把一部改成同步
        (function getFile(i) {
            if (i == files.length) {
                return false;
            }
            fs.stat('html/' + files[i], function (error, status) {
                if (error) {
                    console.log(error);
                } else {
                    console.log(files[i]);
                    if (status.isDirectory()) {
                        filesArr.push(files[i]);
                        console.log(filesArr);
                    }
                }
                //递归调用
                getFile(i + 1);
            })
        })(0)
    }
});



