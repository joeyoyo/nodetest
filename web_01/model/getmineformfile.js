exports.getMine = function (fs,extname) {
    fs.readFile('./mime.json',function (err,data) {
        if (err){
            console.log('mime.json不存在');
            return false;
        }
        var mimes = JSON.parse(data.toString());
        console.log(mimes);
    })

}
