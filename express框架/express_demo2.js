const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    console.log('主页get请求')
    res.send('Hello Get')
})

app.post('/',(req,res)=>{
    console.log('主页post请求')
    res.send('Hello Post')
})

app.delete('/del_user',(req,res)=>{
    console.log('/del_user 响应DELETE请求')
    res.send('删除页面')
})

app.get('/list_user',(req,res)=>{
    console.log('/list_user Get请求')
    res.send('用户列表页面')
})

let server = app.listen(3000,()=>{
    let host = server.address().address
    let port = server.address().port

    console.log(host,port)
})