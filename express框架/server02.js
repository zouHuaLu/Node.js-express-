//文件上传
const express = require('express')
const app = express()
const fs = require('fs')
let bodyParser = require('body-parser')
let multer = require('multer')

app.use('/public',express.static('public'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(multer({dest:'/tmp/'}).array('image'))

app.get('/index.html',(req,res)=>{
    res.sendFile(__dirname+"/"+"index.html")
})

app.post('/file_upload',(req,res)=>{
    console.log(req.files[0])

    let des_file = __dirname+"/"+req.files[0].originalname
    fs.readFile(req.files[0].path,(err,data)=>{
        fs.writeFile(des_file,data,(err)=>{
            if(err){
                console.error(err)
            }else{
                response={
                    message:'文件上传成功！',
                    filename:req.files[0].originalname
                }
            }
            console.log(response)
            res.end(JSON.stringify(response))
        })
    })
})

let server = app.listen(3000,()=>{
    let host = server.address().address
    let port = server.address().port
    console.log(host,port)
})
