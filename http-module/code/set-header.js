//Syntax = setHeader(name-of-the-header, value-of-the-header)
//Purpose = used to set single header value for implicit headers

const http = require('http')
http.createServer(function (req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    res.write('Hello Node.js!')
    res.end()
}).listen(3000, function () {
    console.log('Server running on port 3000')
})

//Here you can see that the text/plain in setHeader is overriden by that of text/html in writeHead
//It can be concluded that writeHead() has precedence over setHeader()

//If you write the setHeader() after the writeHead(), an error occurs
//This is because headers cannot be set after they are sent to the client
