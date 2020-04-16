//fs.readFile 读取文件函数
const fs = require('fs')
//异步
// fs.readFile('../index.txt','utf8',function(err,data){
//     if(err){
//         console.error(err)
//         console.log('读取失败')
//     }else{
//         console.log(data)
//     }
// })

//-------------------------------------------------------
//fs.open()

//-------------------------------------------------------
//fs.read
//示例：
// fs.open('../index.txt','r',(err,fd)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     var buf = new Buffer(8)

//     fs.read(fd,buf,0,8,null,(err,bytesRead,buffer)=>{
//         if(err){
//             console.error(err)
//             return
//         }
//         console.log('bytesRead:' + bytesRead)
//         console.log(buffer)
//     })
// })

//--------------------------------------------------------
