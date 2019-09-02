var Koa = require('koa');
var router =require('koa-router')();
var views = require('koa-views');
var bodyParser =require('koa-bodyparser');
var static = require('koa-static');

var app = new Koa();
app.use(bodyParser());
app.use(views('views',{
    extension:'ejs'
}));
app.use(static(__dirname + '/static'));
app.use(static(__dirname + '/public'));

router.get('/',async(ctx)=>{
    await  ctx.render('index');
});
router.post('/doAdd',async(ctx)=>{
    // var d = await common.getPostData(ctx);
    var d  = ctx.request.body;
    console.log(d);
    ctx.body = '表单提交成功';
})
app.use(router.routes());//启动路由
app.use(router.allowedMethods());
app.listen(3004);

