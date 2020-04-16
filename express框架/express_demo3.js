const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.send('Hello world')
})

let server = app.listen(3000,()=>{
    let host = server.address().address
    let port = server.address().port

    console.log(host)
    console.log(port)
})