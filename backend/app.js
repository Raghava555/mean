const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const _mongoose = require('mongoose')

console.log("yes")


_mongoose.connect("mongodb+srv://kalai:Kalai@30@cluster0.pojau.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
.then(()=>{
    console.log("datsa base is connected")
})
.catch(()=>{
    console.log("connection is failaed");
})

app.use((req,res,next)=>{
    console.log('first middle ware print in log');
    // to avoid cros issue... 
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers',
    'Origin, X-Requested-With,Content-Type,Accept');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,DELETE,OPTIONS,PATCH')
    next();
    });

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}))

app.post('/get/login',(req,res,next)=>{
    const post = req.body;
    console.log("psot",post);
    res.status(200).json({});
    next();
})
// --- to login
    app.get('/get/login',(req,res,next)=>{
        console.log("second middle ware");
        const post = req.body;
        let post ={
            success:true,
            isUserAuthenticated:true,
            customerid:'123'
        }
        res.status(200).json(post)
    })

    // app.put('/api/postdata/:updateId',(req,res,next)=>{
    //     const operator = new _postMongodata({
    //         title = req.body.title,
    //         descp= req.body.descp,
    //         _id=req.body.id
    //     })
    //     _postMongodata.updateOne({_id:req.params.id,},operator).then(result=>{
    //         console.log("udpated post");
    //         res.status(200).json({message:"udpated successfully"})
    //     })
    // })

    module.exports= app;
    