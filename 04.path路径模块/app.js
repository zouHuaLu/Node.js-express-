const path = require('path');

let a = '/test/something.txt'

// basename返回路径的最后一部分
console.log(path.basename(a))

// 返回路径的目录部分
console.log(path.dirname(a))

// 解析对象的路径为片段

console.log(path.parse(a))