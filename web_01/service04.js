var fs = require('fs');
var http = require('http');
var path = require('path');
var url = require('url');
var mimeModel = require('./model/getmineformfile');

// console.log(mimeModel.getMine(fs,'.css'));
http.createServer(function (req, res) {
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
       fs.readFile('static/'+pathname,function (err,filedata) {
           if (err){
               fs.readFile('static/404.html',function (error,data404) {
                   if(error){
                       console.log(error);
                   }
                   res.writeHead(404,{"Content-Type":"text/html;charset='utf-8'"});
                   res.end(data404);
               });
           }else{
               var modelname= mimeModel.getMine(fs,extname);
               res.writeHead(200,{"Content-Type":""+modelname+";charset='utf-8'"});
               res.end(filedata);
           }

       })

   }

}).listen(8080);
