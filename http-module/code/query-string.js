const http = require('http')
http.createServer(function (req, res) {
    if (req.url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        })
        res.write('<h1>Hello, Home Page!</h1>')
        res.end()
    }
    else if (req.url === '/example') {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        })
        res.write(JSON.stringify({
            'Foo': 'Bar'
        }))
        res.end()
    }
    else {
        res.end('Invalid Request')
    }
}).listen(3000, function () {
    console.log('Server running on Port 3000')
})