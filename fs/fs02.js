var fs = require('fs');
fs.stat('upload',function (err,stats) {
    if (err){
        fs.mkdir('upload',function (error) {
            if (error) {
                console.log(error);
                return false;

            }
            console.log('创建成功')
        })
    } else{
        console.log('目录已经存在');
        console.log(stats.isDirectory());
    }
});
