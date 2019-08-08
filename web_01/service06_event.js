var fs = require('fs');
var http = require('http');
var path = require('path');
var url = require('url');
var mimeModel = require('./model/getmineformfile_event');
var events = require('events');
var EventEmitter = new events.EventEmitter();
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
               mimeModel.getMine(fs,extname,EventEmitter);
               //绑定事件接受，有接受到广播就触发，不然不触发
               EventEmitter.on('to_mime',function (result) {
                   res.writeHead(200,{"Content-Type":""+result+";charset='utf-8'"});
                   res.end(filedata);
               })
           }
       })
   }
}).listen(8083);
