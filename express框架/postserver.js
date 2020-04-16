const express = require('express')
const app = express()
const bodyparser = require('body-parser')

let urlencodeParser = bodyparser.urlencoded({extended:false})

app.use('/public',express.static('public'))

app.get('/index.html',(req,res)=>{
    res.sendFile(__dirname+'/'+"index.html")
})

app.post('/process_post',urlencodeParser,(req,res)=>{
    let response = {
        "first_name":req.body.first_name,
        "last_name":req.body.last_name
    }
    console.log(response)
    res.end(JSON.stringify(response))
})

let server = app.listen(3000,()=>{
    let host = server.address().address
    let port = server.address().port

    console.log(host,port)
})