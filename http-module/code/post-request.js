const http = require('http')
let payload = JSON.stringify({
    "name": "Harry",
    "age": 28
});
let headers = {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(payload, 'utf8')
};

let options = {
    host: 'httpbin.org',
    port: 80,
    path: '/post',
    method: 'POST',
    headers: headers
};

let reqPost = http.request(options, (res) => {
    console.log("status code: ", res.statusCode);

    res.on('data', (chunks) => {

        process.stdout.write(chunks);
    });
});

reqPost.write(payload);
reqPost.end();

reqPost.on('error', (err) => {

    console.error(err);
});