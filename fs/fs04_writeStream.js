const fs = require('fs');
var data = "我是写入的数据\n"
var  writeStream = fs.createWriteStream('output1.txt');

for(var i=0;i<100;i++){
    writeStream.write(data,'utf-8');
};

//标记写入完成
writeStream.end();

writeStream.on('finish',function () {
       console.log('写入完成');
});
writeStream.on('erro',function (chunk) {
    console.log('写入失败');
});
