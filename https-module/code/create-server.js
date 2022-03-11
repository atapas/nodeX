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

//Run the following commands before running this file.
//command = openssl req - nodes - new - x509 - keyout server.key - out server.cert
// After running this command, we would get some options to fill.We can keep those options default or empty by entering ‘.‘ (dot).We would fill only two options for current as that would work fine for us.
// Common Name(e.g.server FQDN or your name): localhost
// Email Address: *************@****** (enter your email)
// Other options such as Country Name, State or Province Name, Locality Name, Organization Name, and Organizational Unit Name are self - explanatory and also the system gives their example for help.

//It is necessary to generate these files
//server.cert = self-signed certificate file
//server.key = Private key of the certificate
