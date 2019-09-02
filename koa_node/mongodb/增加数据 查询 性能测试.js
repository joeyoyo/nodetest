var MongoClient = require('mongodb').MongoClient;
var dbUrl = 'mongodb://localhost:27017/';
var dbName = 'koa';

// console.time('start');
// MongoClient.connect(dbUrl,(err,client)=>{
//     if (err){
//         console.log(err);
//         return;
//     }
//     var db =client.db(dbName);
//     console.timeEnd('start');
//     db.collection('user').insertOne({"name":"joe","age":21,"sex":"男"},function (err,result) {
//         if (!err){
//             console.log('增加数据成功');
//             client.close();
//         }
//     })
// })
console.time('start1');
MongoClient.connect(dbUrl,(err,client)=>{
    if(err){
        console.log(err);
        return;
    }
    var db = client.db(dbName);
   var result = db.collection('user').find({});
    result.toArray((err,docs)=>{
        console.timeEnd('start1');
       console.log(docs);
   })
})


console.time('start2');
MongoClient.connect(dbUrl,(err,client)=>{
    if(err){

        console.log(err);
        return;
    }

    var db=client.db(dbName);
    //查询数据

    var result=db.collection('user').find({});

    result.toArray((err,docs)=>{
        console.timeEnd('start2');
        console.log(docs);

    })
})
