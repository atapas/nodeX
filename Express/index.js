const express=require('express');
const app=express();
// app.use((req,res)=>{
//     console.log("WE GET A NEW REQUEST")
//     //res.send({color:'red'});
//     res.send('<h1>hi this is my browser</h1>')
// })
app.listen(3000,()=>{
    console.log("LISTENING ON PORT 3000");
})
app.get('/r/:subreddit',(req,res)=>{
    //res.send('THIS IS A SUBREDDIT');//only one request can be sent
    const {subreddit}=req.params;
    res.send(`<h1> browsing the ${subreddit} subreddit</h1>`)
})
app.get('/r/:subreddit/:postId',(req,res)=>{
    //res.send('THIS IS A SUBREDDIT');//only one request can be sent
    const {subreddit,postId}=req.params;
    res.send(`<h1> viewing postid:${postId} on  the ${subreddit} subreddit</h1>`)
})
app.get('/cats',(req,res)=>{
    res.send('MEOW!!!');
})
app.get('/dogs',(req,res)=>{
    res.send('WOOF');
})
app.get('/',(req,res)=>{
    res.send('<h1>THIS IS MY HOMEPAGE!!</h1>');
})
app.post('/',(req,res)=>{// FOR SENDING POST REQUEST
    res.send('post request, this is different from get requets /cats');
})
// app.get('*',(req,res)=>{
//     res.send('i dont know that path');// this has to be put at last.
// })// this is generic and will respond to anything commenting out for now
 app.get('/search',(req,res)=>{
     console.log(req.query);
     const{q}=req.query;
     if(!q)
     {
         res.send('nothing found if nothing searched');
     }
     else
     res.send(`search results for  ${q}`);
 })