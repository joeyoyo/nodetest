
//用事件EventEmitter的方法来使异步变为同步
exports.getMine = function (fs,extname,EventEmitter) {
    fs.readFile('./mime.json',function (err,data) {
        if (err){
            console.log('mime.json不存在');
            return false;
        }
        var mimes = JSON.parse(data.toString());
        var result = mimes[extname] || 'text/html';
        // 广播触发
        EventEmitter.emit('to_mime',result);
    });
};
