
var Koa=require('koa'),
    router = require('koa-router')(),
    render = require('koa-art-template'),
    path=require('path'),
    session = require('koa-session');

var app=new Koa();

//配置 koa-art-template模板引擎
render(app, {
    root: path.join(__dirname, 'views'),   // 视图的位置
    extname: '.html',  // 后缀名
    debug: process.env.NODE_ENV !== 'production'  //是否开启调试模式

});

//配置session的中间件
app.keys = ['some secret hurr'];   /*cookie的签名*/
const CONFIG = {
    key: 'koa:sess', /** 默认 */
    maxAge: 10000,  /*  cookie的过期时间        【需要修改】  */
    overwrite: true, /** (boolean) can overwrite or not (default true)    没有效果，默认 */
    httpOnly: true, /**  true表示只有服务器端可以获取cookie */
    signed: true, /** 默认 签名 */
    rolling: true, /** 在每次请求时强行设置 cookie，这将重置 cookie 过期时间（默认：false） 【需要修改】 */
    renew: false, /** (boolean) renew session when session is nearly expired      【需要修改】*/
};
app.use(session(CONFIG,app));

router.get('/',async (ctx)=>{
  ctx.session.userinfo = '李四';
    //ctx.body="首页"
    let list={

        name:'张三',
        h:'<h2>这是一个h2</h2>',
        num:20,
        data:['11111111','2222222222','33333333333']
    }

    await ctx.render('index',{
        list:list

    });

})
//接收post提交的数据
router.get('/news',async (ctx)=>{

    let app={

        name:'张三11',
        h:'<h2>这是一个h211</h2>',
        num:20,
        data:['11111111','2222222222','33333333333']
    };
    await ctx.render('news',{
        list:app
    });

})
router.get('/about',async(ctx)=>{
    let d = ctx.session.userinfo;
    console.log(d)
    ctx.body = "我的名字是" + d;
})


app.use(router.routes());   /*启动路由*/
app.use(router.allowedMethods());
app.listen(3011);






