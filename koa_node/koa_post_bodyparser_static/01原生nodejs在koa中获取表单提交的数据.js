var Koa = require('koa');
var router =require('koa-router')();
var views = require('koa-views');
var common =require('./module/common');

var app = new Koa();
app.use(views('views',{
    extension:'ejs'
}))
router.get('/',async(ctx)=>{
    await  ctx.render('index');
});
router.post('/doAdd',async(ctx)=>{
    var d = await common.getPostData(ctx);
    console.log(d);
    ctx.body = '表单提交成功';
})
app.use(router.routes());//启动路由
app.use(router.allowedMethods());
app.listen(3003);

