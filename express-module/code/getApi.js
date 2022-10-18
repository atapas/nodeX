/*
* @description : provided the way to create an get api.
*/

let express = require('express'); //This returns a function which is stored in express variable

let app = express();              //Here we are creating the express application, which will be having get, post, etc functionalities.

//Get API is used to retreive values and can be hit from browsers or softwares like POSTMAN etc.
app.get('/', (req, res)=>{
    res.send("Correctly hitting the get API");
})


//Here the server is started on PORT defined in process.env file, if it doesn't exist it runs on port 8080
app.listen(process.env.PORT || 8080, ()=>{
    console.log("Server started successfully");
})