var fs = require('fs');
function getmime(callback) {
    fs.readFile('mime.json',function(err,data){
        // return data;
        callback(data);
    });
};

getmime(function (result) {
    console.log(result.toString());
});
