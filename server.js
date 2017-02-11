// var http = require('http');
// var server = http.createServer(handleRequest);
// var handleRequest = function(request, response){
//     response.writeHead(200,{'Content-Type':'text/plain'});
//     response.end("你好");
// }
// server.listen(8080,'127.0.0.1',function(){
//     console.log('HTTP伺服器 http://127.0.0.1:8080/ 上運行');
// });

var http = require('http')
var express = require('express');
var app = express();
var server = http.createServer(app);

function EchoFunc(req,res){
  res.writeHead(200, {'Content-Type': 'text/plain ;charset=utf-8;'});
  res.end("(´・ω・｀)!"+req.url)
};

function HelloWorld(req,res){
  res.writeHead(200, {'Content-Type': 'text/plain ;charset=utf-8;'});
  res.end("Hello world");
};

app.get('/',HelloWorld);
app.get('/echo',EchoFunc);

server.listen(3000, '127.0.0.1',function(){
  console.log("3(´・ω・｀)!")
  console.log("2(´・ω・｀)!")
  console.log("1(´・ω・｀)!")
  console.log("Open(´・ω・｀)!")
});
