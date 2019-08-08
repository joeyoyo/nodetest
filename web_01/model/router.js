/*此js为封装为路由的方法*/

var fs=require('fs');
var path=require('path');
var url=require('url');

/*获取后缀名*/
function getmime(extname,callback) {
    fs.readFile('./mime.json',function (err,data) {
        if (err){
            console.log('mime.json不存在');
            return false;
        }
        var mimes = JSON.parse(data.toString());
        var result = mimes[extname] || 'text/html';
        callback(result);
    });
};
// 暴露出去routerEvent
exports.routerEvent = function (req,res,statiPath) {
        var pathname = url.parse(req.url).pathname;
        console.log(pathname);
        //获取文件的后缀名
        var extname = path.extname(pathname);
        console.log(extname);
        if (pathname =='/') {
            pathname = '/index.html';
        }
        if (pathname !='/favicon.ico') {
            //文件操作获取 static下面的index.html
            fs.readFile(statiPath +'/'+ pathname,function (err,filedata) {
                if (err){
                    fs.readFile(statiPath + '/404.html',function (error,data404) {
                        if(error){
                            console.log(error);
                        }
                        res.writeHead(404,{"Content-Type":"text/html;charset='utf-8'"});
                        res.end(data404);
                    });
                }else{
                    getmime(extname,function (result) {
                        res.writeHead(200,{"Content-Type":""+result+";charset='utf-8'"});
                        res.end(filedata);
                    });
                }
            })
        }
}
