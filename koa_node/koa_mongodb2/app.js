var Koa = require('koa'),
    router = require('koa-router')(),
    render = require('koa-art-template'),
    path = require('path'),
    bodyParser = require('koa-bodyparser'),
    DB = require('./module/db.js');
var app = new Koa();
app.use(bodyParser());
render(app, {
    root: path.join(__dirname, 'views'),
    extname: '.html',
    debug: process.env.NODE_ENV !== 'production'
});
router.get('/',async(ctx)=>{
    let result = await  DB.find('user',{});
    await ctx.render('index',{
        list:result
    })
})
router.get('/add',async(ctx)=>{
     ctx .render('add',{
    })
})
router.post('/doAdd',async(ctx)=>{
    let bodyInfo =  ctx.request.body;
    let data = await DB.insert('user',bodyInfo);
    try{
        if (data.result.ok) {
            ctx.redirect('/');
        }
    }catch (e) {
            console.log(e);
            ctx.redirect('/add');
            return;
    }
})
router.get('/edit',async(ctx)=>{
    let objectId = ctx.query.id;
    let result = await DB.find("user",{"_id":DB.getObjectId(objectId)});
    await ctx.render('edit',{
       list:result[0]
    })
})

router.post('/doEdit',async(ctx)=>{
    let bodyInfo = ctx.request.body;
    let id = bodyInfo.id;
    let username = bodyInfo.username;
    let age = bodyInfo.age;
    let sex = bodyInfo.sex;
    let data = await DB.update('user',{"_id":DB.getObjectId(id)},{
        username,age,sex});
    console.log(data);
    try{
        if(data.result.ok){
            ctx.redirect('/');
        }
    }catch (e) {
        console.log(e);
        ctx.redirect('/edit');
        return;
    }

})

router.get('/delete',async(ctx)=>{
    let objectId = ctx.query.id;
    let data = await DB.remove("user",{"_id":DB.getObjectId(objectId)});
    if (data){
        ctx.redirect('/');
    }
})



app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3004);
