const fs = require('fs')
const template = require('art-template')

fs.readFile('./temp.html',(err,data)=>{
    if(err){
        console.log('读取文件失败')
    }

    let ret = template.render(data.toString(),{
        name:'huangjie',
        age:25,
        province:'江苏',
        games:[
            '写代码',
            '打篮球',
            '打游戏'
        ]
    })

    console.log(ret)
})