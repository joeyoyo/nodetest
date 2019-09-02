// /*回调函数获取异步方法里的数据*/
// function getData(callback) {
//     setTimeout(function () {
//         var name = "李四";
//         callback(name);
//     },1000)
// }
//
// //外部获取异步方法里面的数据
// getData(function (data) {
//     console.log(data);
// });
//
//
// /*Promise处理异步
// * resolve 成功的回调函数
// * reject 失败的回调函数
// * */
// var p = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         var name = "章三";
//         if (Math.random() < 0.7) {
//             resolve(name)
//         } else {
//             reject("失败")
//         }
//     }, 1000);
// });
//
// p.then((data) => {
//     console.log(data);
// });

function getData(resolve,reject) {
    setTimeout(function () {
        var name = "张三";
        resolve(name);
    },1000)
}
var p = new Promise(getData);
console.log(p);
p.then((data)=>{
    console.log(data);
});



var name = 'joe';
console.log(`${name}在这里`);

// 属性的简写 、方法的简写
var app={
    name,
    run(){
        console.log(`${this.name}在跑步`);
    }
}
console.log(app.name);
app.run();



