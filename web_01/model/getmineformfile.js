
//这是正确的写法，readFileSync为同步写法

exports.getMine = function (fs,extname) {/*获取后缀名的方法*/


    var data = fs.readFileSync('./mime.json');
    var mimes = JSON.parse(data.toString());
    return mimes[extname] || 'text/html';
};
