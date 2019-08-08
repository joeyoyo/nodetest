var fs = require('fs');
var http = require('http');
var path = require('path');
var url = require('url');
var mimeModel = require('./model/getmineformfile');

console.log(mimeModel.getMine(fs,'.css'));
