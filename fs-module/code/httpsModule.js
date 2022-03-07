//HTTPS module provides a way of making Node.js transfer data 
//over HTTP TLS/SSL protocol. This is secure than HTTP Protocol
const https = require('https')

//on method is attached to an event handler
//res.on(event, function)
//checkout - https://stackoverflow.com/questions/61153349/what-is-the-meaning-of-the-res-on-method

https.get('https://jsonplaceholder.typicode.com/users', (res) => {
    let data = ''
    res.on('data', (message) => {
        data = data + message.toString()
    })
    res.on('end', () => {
        console.log(data)
    })
}).on('error', (error) => {
    console.log(error.message)
})