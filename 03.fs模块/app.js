const fs = require("fs")

fs.stat('./test.txt',function(err,data){
    if(err){
        console.error(err);
        return
    }
    console.log(`是文件吗？   ${data.isFile()}`);
    console.log(`是目录吗？   ${data.isDirectory()}`);
})