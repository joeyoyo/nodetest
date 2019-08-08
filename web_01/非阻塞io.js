var fs = require('fs');
function getmime() {
    fs.readFile('mime.json',function(err,data){
        return data;
    });
};
console.log(getmime());  /*������*/
