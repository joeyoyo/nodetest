var fs = require('fs');
var events = require('events');
var EventEmitter = new events.EventEmitter();

function getmime() {
    fs.readFile('mime.json',function (err,data) {
        // 广播
        EventEmitter.emit('to_parent',data);
    });
}
//调用
getmime();

// 监听
EventEmitter.on('to_parent',function (mime) {
    console.log(mime.toString());
})

