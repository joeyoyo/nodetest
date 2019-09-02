
var Koa=require('koa'),
    router = require('koa-router')(),
    render = require('koa-art-template'),
    path=require('path');

var cookie=new Koa();

//配置 koa-art-template模板引擎
render(cookie, {
    root: path.join(__dirname, 'views'),   // 视图的位置
    extname: '.html',  // 后缀名
    debug: process.env.NODE_ENV !== 'production'  //是否开启调试模式

});

router.get('/',async (ctx)=>{
    ctx.cookies.set('username','joe',{
        maxAge:100000,
        path:'/about',  /*配置可以访问的页面*/
    })
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
    let d = ctx.cookies.get("username");
    console.log(d);
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
    let d = ctx.cookies.get("username");
    console.log(d)
     ctx.body = "我的名字是" + d;
})


cookie.use(router.routes());   /*启动路由*/
cookie.use(router.allowedMethods());
cookie.listen(3010);






