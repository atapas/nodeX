//Perform a GET request
//HTTP module can be used to create client requests

//A GET request can be performed in 2 ways, using the http.get() and http.request()
//Difference is that the http.get() method sets the method to GET and calls req.end() automatically

const http = require('http');

const options = {
    hostname: 'webcode.me',
    port: 80,
    path: '/',
    method: 'GET'
};

const req = http.request(options, (res) => {
    console.log(`statusCode: ${res.statusCode}`);
    res.on('data', (d) => {
        process.stdout.write(d);
    });
});

req.on('error', (err) => {
    console.error(err);
});

req.end();