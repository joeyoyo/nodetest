var http = require('http');
var router = require('./model/router');
http.createServer(function (req,res) {
     router.routerEvent(req,res,'static');
}).listen(8090);
