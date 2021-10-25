// 读取文件

const fs = require('fs')

// fs.readFile('./test.txt','utf-8',(err,data)=>{
//     if(err){
//         console.error(err)
//         return 
//     }
//     console.log(data)
// })

try {
    let data = fs.readFileSync('./test.txt','utf-8')   
    console.log(data)
} catch (error) {
    console.error(error)
}