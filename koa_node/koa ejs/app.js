var Koa = require('koa');
var router =require('koa-router')();

var views = require('koa-views');

var app = new Koa();

//配置模板引擎中间件  --第三方中间件
//app.use(views('views', { map: {html: 'ejs' }})
app.use(views('views',{
    extension:'ejs'  /*应用ejs模板引擎*/
}));


app.use(async (ctx,next)=>{
    //写一个中间件配置公共的信息
    ctx.state = {
        username:'joe',
        age:21
    }
    await next();
})

router.get('/news',async (ctx)=>{
    let title ="这是标题";
    await ctx.render('news',{
        title
    })

})

app.use(router.routes());   /*启动路由*/
app.use(router.allowedMethods());
app.listen(3009);
