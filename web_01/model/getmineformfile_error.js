
//这是错误的写法，由于node的很多API都是异步。
// (return出去一般打印不出我们想要的结果)
// 所以打印出来是
//1，3，undefined,2
exports.getMine = function (fs,extname) {
    console.log('1');

    fs.readFile('./mime.json',function (err,data) {
        if (err){
            console.log('mime.json不存在');
            return false;
        }
        var mimes = JSON.parse(data.toString());
        console.log('2');
        return  mimes[extname] || 'text/html';
    });
    console.log('3');
};
