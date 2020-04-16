const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/index.html',(req,res)=>{
    res.sendFile(__dirname+"/"+"index.html")
})

app.get('/process_get',(req,res)=>{
    response = {
        first_name : req.query.first_name,
        last_name : req.query.last_name
    }
    console.log(response)
    res.send(JSON.stringify(response))
})

let server = app.listen(3000,()=>{
    let post = server.address().address
    let port = server.address().port
    console.log(post,port)
})