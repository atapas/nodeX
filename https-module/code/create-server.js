const https = require('https')
const fs = require('fs')
const options = {
    key: fs.readFileSync("server.key"),
    cert: fs.readFileSync("server.cert"),
};
https.createServer(options, function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    })
    res.end('Hello World')
}).listen(3000)