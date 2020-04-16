const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send('Hello World!')
})

let server = app.listen(3000,()=>{
    let host = server.address().address
    let port = server.address().port

    console.log('访问地址为：http://%s:%s',host,port)
})