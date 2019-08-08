var http = require('http');
var url = require('url');
var ejs = require('ejs');
var fs = require('fs');
http.createServer(function (req,res) {
	res.writeHead(200,{"Content-Type":"text/html;charset='utf-8'"});
//获取get 还是post请求
	var method = req.method.toLowerCase();
	var pathname = url.parse(req.url,true).pathname;
	console.log(pathname);
	if (pathname == '/login'){
		/*显示登录页面*/
		//把数据库的数据渲染到模板上面
		ejs.renderFile('views/form.ejs',{},function (err,data) {
			res.end(data);
		})
	}else if(pathname == '/dologin'&& method =='get'){
		//get获取数据
		console.log(url.parse(req.url,true).query);
		res.end('dologin');
	}else if(pathname =='/dologin'&& method =='post'){
		var postStr = '';
		req.on('data',function (chunk) {
			postStr+=chunk;
		});
		req.on('end',function (err,chunk) {
			console.log(postStr);
			fs.appendFile('loginLog.txt',postStr+'\n',function (err) {
				if (err){
					console.log(err);
					return;
				}
				console.log("写入数据成功");

			})
			res.end("<script>alert('登陆成功');history.back();</script>")

		})

	}else{
		ejs.renderFile('views/index.ejs',{},function (err,data) {
			res.end(data);
		})
	}
}).listen(8070);

