//To know the use of HTTP module
//HTTP module is the Key Module to Node.js networking
//This module allows Node.js to transfer data over HTTP

//In this example we will look into how web server can be created using Node.js + HTTP Module
const http = require('http');
const url = require('url')

//create a server object, serve the URL and the display the query values passed in the URL
http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    res.write('<h1>Hello World</h1>')
    res.write('URL entered => ')
    res.write(req.url)
    let query = url.parse(req.url, true).query;
    let message = query.name + " " + query.age
    res.write('<br/> Query Values => ');
    res.end(message);
}).listen(3000);