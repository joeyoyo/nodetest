var mysql = require('mysql');

var conn  = mysql.createConnection({
    host    : '192.168.105.16',
    user    : 'root',
    password: 'test123456',
    database: 'lzf_test'
});

conn.connect();

conn.query('SELECT * FROM app_cct_publish_order',function (error, results, fields) {
    console.log(JSON.stringify(error));
    console.log(JSON.stringify(results));
    console.log(JSON.stringify(fields));
})
