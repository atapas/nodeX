const https = require('https');

const data = JSON.stringify({
    name: 'John Doe',
    job: 'Content Writer'
});

const options = {
    hostname: 'jsonplaceholder.typicode.com',
    path: '/users',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
};

const req = https.request(options, (res) => {
    let data = '';
    console.log('Status Code:', res.statusCode);
    res.on('data', (d) => {
        data = data + d;
    });
    res.on('end', () => {
        console.log('Body: ', JSON.parse(data));
    });
})

req.on("error", (err) => {
    console.log("Error: ", err.message);
});

req.write(data);
req.end();