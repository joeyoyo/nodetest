
//用callback的方法来使异步变为同步
exports.getMine = function (fs,extname,callback) {
    console.log('1');
    fs.readFile('./mime.json',function (err,data) {
        if (err){
            console.log('mime.json不存在');
            return false;
        }
        var mimes = JSON.parse(data.toString());
        console.log('2');
        var result = mimes[extname] || 'text/html';
        callback(result);
    });
    console.log('3');
};
