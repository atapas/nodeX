const http = require('http')
http.createServer(function (req, res) {
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
