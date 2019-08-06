/*
 1. fs.stat  检测是文件还是目录
 2. fs.mkdir  创建目录
 3. fs.writeFile  创建写入文件
 4. fs.appendFile 追加文件
 5.fs.readFile 读取文件
 6.fs.readdir读取目录
 7.fs.rename 重命名
 8. fs.rmdir  删除目录
 9. fs.unlink删除文件
*/
var fs = require('fs');

//1. fs.stat  检测是文件还是目录
// fs.stat('html',function (err,stats) {
//     if (err){
//         console.log(err);
//         return;
//     }
//     console.log(stats.isDirectory());
// });
//
// fs.stat('output.txt',function (err,stats) {
//     if (err){
//         console.log(err);
//         return;
//     }
//     console.log(stats.isFile());
// });

//2. fs.mkdir  创建目录
//接收参数：
//path            将创建的目录路径
//mode          目录权限（读写权限），默认0777
//callback      回调，传递异常参数err
// fs.mkdir('css',function (err) {
//     if(err){
//         console.log(err);
//         return false;
//     }
//     console.log('创建目录成功');
// });

// fs.writeFile('t.txt','你好，覆盖',function (err) {
//     if(err){
//         console.log(err);
//         return false;
//     }
//     console.log('写入成功');
// });

//4. fs.appendFile 追加文件
// fs.appendFile('t.txt', '\n这是追加的', function (err) {
//     if (err) {
//         console.log(err);
//         return false;
//     }
//     console.log('写入成功');
// });

//5.fs.readFile 读取文件
// fs.readFile('t.txt',function (err,data) {
//     if (err) {
//         console.log(err);
//         return false;
//     }
//     console.log(data);
//     console.log(data.toString());
// });

//6.fs.readdir读取目录  把目录下面的文件和文件夹都获取到(数组形式)。
// fs.readdir('html',function (err,data) {
//     if (err){
//         console.log(err);
//         return;
//     }
//     console.log(data)
// });

//7.fs.rename 重命名
//1.改名  2.剪切文件

// fs.rename('html/hello.html', 'html/index.html', function (err) {
//     if (err) {
//         console.log(err);
//
//         return false;
//     }
//     console.log('修改名字成功');
// });

//8. fs.rmdir  删除目录
// fs.rmdir('css', function (err) {
//     if (err) {
//         console.log(err);
//         return false;
//     }
//     console.log('删除目录成功');
// });

//9. fs.unlink删除文件
fs.unlink('t.txt', function (err) {
    if (err) {
        console.log(err);
        return false;
    }
    console.log('删除文件成功');
})




