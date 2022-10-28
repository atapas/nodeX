/*
* @description : provided the way to create an put api.
*/

let express = require('express'); //This returns a function which is stored in express variable

let app = express();              //Here we are creating the express application, which will be having get, post, etc functionalities.

//Get API is used to update values already present in database and cannot be hit from browsers. To hit post api's we require special softwares like POSTMAN, curl etc.
app.put('/', (req, res)=>{
    res.send("Correctly hitting the get PUT API");
})


//Here the server is started on PORT defined in process.env file, if it doesn't exist it runs on port 8080
app.listen(process.env.PORT || 8080, ()=>{
    console.log("Server started successfully");
})