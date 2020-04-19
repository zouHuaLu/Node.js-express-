const http = require('http')
const fs = require('fs')
const template = require('art-template')
const url = require('url')

let comments = [
    {
        name:'张三',
        message:'挺好的1',
        dateTime:'2019.5.5'
    }, {
        name: '张三2',
        message: '挺好的2',
        dateTime: '2019.5.5'
    }, {
        name: '张三3',
        message: '挺好的3',
        dateTime: '2019.5.5'
    }, {
        name: '张三4',
        message: '挺好的4',
        dateTime: '2019.5.5'
    }, {
        name: '张三5',
        message: '挺好的5',
        dateTime: '2019.5.5'
    },
]

http
    .createServer((req,res)=>{
        let parseObj = url.parse(req.url,true)
        // let url = req.url
        let pathname = parseObj.pathname
        if(pathname === '/'){
            fs.readFile('./views/index.html',(err,data)=>{
                if(err){
                    res.end('404 Not Found')
                }else{
                    let tempData = template.render(data.toString(),{
                        comments:comments
                    })
                    res.end(tempData)
                }
            })
        }else if(pathname === '/post'){
            fs.readFile('./views/post.html',(err,data)=>{
                if(err){
                    res.end('404 Not Found')
                }else{
                    res.end(data)
                }
            })
        }else if(pathname.indexOf('/public/')===0){
            fs.readFile('.'+ pathname,(err,data)=>{
                if(err){
                    res.end('404 Not Found')
                }else{
                    res.end(data)
                }
            })
        }
        else if(pathname === '/pinglun'){
            let comment = parseObj.query//查询字符串
            // res.setHeader('Content-Type','Text/plain,charest:utf-8')
            comment.dateTime = '2017-8-9'
            comments.push(comment)

            res.statusCode = 302
            res.setHeader('Location','/')
            res.end()
            // res.end(JSON.stringify(comment))

        }else{
            fs.readFile('./views/404.html',(err,data)=>{
                if(err){
                    res.end('404 Not Found')
                }else{
                    res.end(data)
                }
            })
        }
    })
    .listen(3000,()=>{
        console.log("启动成功,http://127.0.0.1:3000")
    })

    //获取当前时间
    function getTime(){
        let date = new Date()
        return date
    }