var fs = require('fs');
var http = require('http');
var url = require('url');
var path = require('path');
var Modelgetmine = require('./model/getmine');
console.log(Modelgetmine);
http.createServer(function (req,res) {
    var pathname = (url.parse(req.url)).pathname;
    //获取文件的后缀名
    var extname = path.extname(pathname);
    console.log(extname);
    if (pathname == '/'){
        pathname = "index/html";
    }
    if (pathname != '/favicon.ico'){
        fs.readFile('static/'+pathname,function (err,data) {
            if (err){
                console.log('404');
                fs.readFile('static/404.html',function (error,data404) {
                    if (error){
                        console.log(error);
                    } else{
                        res.writeHead(404,{"Content-Type":"text/html;charset=utf-8"})
                        res.end(data404);
                    }
                })
            } else{
                var modelname = Modelgetmine.getmine(extname);
                res.writeHead(200,{"Content-Type":""+modelname+";charset='utf-8'"})
                res.end(data);
            }
        })
    }

}).listen(8003);
