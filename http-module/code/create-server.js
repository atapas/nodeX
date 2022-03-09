//HTTP is a built-in module that allows Node.js to transfer data over Hyper Text Transfer Protocol
//A server can be created using the HTTP Module

var http = require('http');
http.createServer(function (req, res) {
    res.write('Hello World!');
    res.end();
}).listen(3000)