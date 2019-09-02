//1、普通方法
// function getData() {
//     return 'hello'
// }
// console.log(getData())


/*
* 2、async 是让方法变成异步
*
* */
// async function getData() {
//     return 'hello'
// }
// console.log(getData());
// var p = getData();
// p.then((data)=>{
//     console.log(data);
// });



/*
* await 是等待异步方法执行完成,可以获取异步方法里面的数据，
* await 阻塞的功能 ，把异步改成一个同步
* async 定义的方法返回的是 Promise对象。
* */
// async function getData() {
//     return 'hello'
// }
// async function test() {
//
//     var p = await getData();
//     console.log(p);
//
// }
//
// test();


function  getData() {
    return new Promise((resolve,reject)=>{
        setTimeout(function () {
            var name ="joe";
            resolve(name);
        },1000)
    })
}

console.log(getData());

async function test(){
    var d = await getData();
    console.log(d);
}
test();
