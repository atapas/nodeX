const https = require('https')

const url = 'https://jsonplaceholder.typicode.com/users'

const req = https.request(url, (res) => {
    let data = ''
    res.on('data', (d) => {
        data = data + d;
    })
    res.on('end', () => {
        console.log(JSON.parse(data))
    })
})

req.on('error', (err) => {
    console.log(err)
})

req.end()