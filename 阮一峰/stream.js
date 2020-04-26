const fs = require('fs')
//流
//创建一个流
// let readtxt = fs.ReadStream('./input.txt', 'utf-8')

// //表示读取
// readtxt.on('data', (chunk) => {
//     console.log(chunk)
// })

// //表示流到了末尾
// readtxt.on('end', () => {
//     console.log('结束')
// })

// //error表示出错
// readtxt.on('error', (err) => {
//     console.log(err)
// })


//pipe()把一个文件流和另一个文件流串起来，这样源文件的所有数据都自动写入到目标文件中了
// let readtxt = fs.createReadStream('./input.txt')
// let writetxt = fs.createWriteStream('./write.txt')

// readtxt.pipe(writetxt)

// function testAwait() {
//     return new Promise((resolve) => {
//         setTimeout(function () {
//             console.log("testAwait");
//             resolve();
//         }, 1000);
//     });
// }

// async function helloAsync() {
//     await testAwait();
//     setTimeout(()=>{

//         console.log("helloAsync");
//     },1000)
// }
// helloAsync();
