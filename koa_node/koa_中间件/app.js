var Koa = require('koa');
var router =require('koa-router')();

var app = new Koa();

app.use(async(ctx,next)=>{
    console.log('01中间件1');
    next();
    console.log('05返回中间件1');

})
app.use((ctx,next)=>{
    console.log('02中间件2');
    next();
    console.log('04返回中间件2');
})

router.get('/news',(ctx)=>{
    console.log('03新闻组件');
    ctx.body = "新闻组件"

})

app.use(router.routes());   /*启动路由*/
app.use(router.allowedMethods());
app.listen(3008);
