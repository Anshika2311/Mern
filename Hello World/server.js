const express=require("express")
var app=express()
const bodyparser=require("body-parser")
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

app.get('/',(req,res)=>{

    res.send("This si from node JS")

})

app.get('/api/helloworld',(req,res)=>{

    res.send("This is hello world from NODEJS")

})

app.get('/api/getnames',(req,res)=>{

    var names=['John','Ronaldo','Sai']
    res.send(names)

})

app.post('/api/validateusername',(req,res)=>{

    var username= req.body.username;

    res.send("The received value of username is:- "+username)
    

})

app.listen(5000,function(){

    console.log("Node Js server is started")

})