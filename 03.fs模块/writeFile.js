const fs = require('fs')

const content = '一些内容'

// 此api会替换文件的内容
// fs.writeFile('./test.txt',content,err=>{
//     if(err){
//         console.error(err)
//         return
//     }
// })


// 可以通过指定标志来修改默认的行为
// fs.writeFile('./test1.txt',content,{flag:'a'},err=>{
//     if(err){
//         console.error(err)
//         return
//     }
// })


// 追加到文件
fs.appendFile('./test2.txt',content,err=>{
    if (err) {
        console.error(err)
        return
    }
})