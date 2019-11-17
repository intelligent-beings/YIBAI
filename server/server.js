const http = require('http');
const fs = require("fs");
const path = require('path');
const url = require('url');
import * as myimg from './mock/img.js'


const hostname = '127.0.0.1';
const port= "9900";

const server = http.createServer().listen(port,hostname,()=>{
    console.log('运行')
})

server.on('request',(req,res)=>{
   
        res.setHeader("200",{'content-Type':'text/html;charset=ut-8;"Access-Control-Allow-Origin", "*"'})
        fs.readFile('./mock/mock_hom',(error,data)=>{
            res.data = data; 
            req.write(data)

            console.log(res.data.toString());
            


        })
        res.end();

        
        
   
    })
server.on('end',function(){
    console.log('vb ');
    
})

