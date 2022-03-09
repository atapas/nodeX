//Syntax = writeHead(statusCode, statusMessage[Optional], headers)
//Purpose = sends a response header to the request

const http = require('http')
http.createServer(function (req, res) {
    // res.writeHead(200, {
    //     'Content-Type': 'text/html'
    // })
    // res.end('Hello world!')

    res.writeHead(200, {
        'Content-Type': 'application/json'
    })
    res.write(JSON.stringify({
        'Name': 'John Doe',
        'Age': '28'
    }))
    res.end()
}).listen(3000, function () {
    console.log('Server running on Port 3000')
})

//what is a header?
//A header tells the server the details about the request such as what type of data the client wants as response