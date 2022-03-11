//URL is a built-in node.js module which is used to split up a web address into readable parts
//url.parse() = parses an addrss with each part of the address as properties
const http = require('http')
const url = require('url')
http.createServer(function (req, res) {
    let q = url.parse(req.url, true).query
    let message = 'Hello ' + q.name + '!'
    //try inserting a name and value in the URL
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    res.write('<h1>' + message + '<h1>')
    res.end()
}).listen(3000, function () {
    console.log('Server running on Port 3000')
})