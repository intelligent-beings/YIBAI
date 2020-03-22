const express = require('express');
const app =  express();
const http = require('http');
const fs = require("fs");
const path = require('path');
const url = require('url');
// import * as myimg from './mock/img.js'


const hostname = '127.0.0.1';
const port= "9900";


app.use(express.json())

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

app.get('/login',(req,res)=>{
    console.log('asdf');

    res.send('ok/login')
})
    

    
    app.listen(port,hostname,()=>{
        console.log('运行port:',port,hostname)
    })