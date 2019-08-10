var fs = require('fs');
var http = require('http');
var url = require('url');
http.createServer(function (req,res) {
    var pathname = url.parse(req.url);
    console.log(pathname.pathname);

    if (pathname == '/'){
        pathname = "index/html";
    }
    if (pathname != '/favicon.ico'){
        fs.readFile('static/'+pathname,function (err,data) {
            if (err){
                console.log('404');
            } else{
                res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
                res.end(data);
            }
        })
    }

}).listen(8033);
