//阻塞代码示例：
// var fs = require("fs")
// var data = fs.readFileSync('index.txt');

// console.log(data.toString());
// console.log("程序执行结束！")


//非阻塞代码示例：

// var fs = require("fs");
// fs.readFile("index.txt",function(err,data){
//     if(err){
//         return console.error(err);
//     }else{
//         console.log(data.toString());
//     }
// });

// console.log("代码执行结束！")

//--------------------------------------------------------------
//时间驱动程序
// var events = require("events");
// var eventEmitter = new events.EventEmitter();

// var connectHandle = function connected(){
//     console.log("连接成功！");

//     eventEmitter.emit("data_received");
// }

// eventEmitter.on("connection",connectHandle)

// eventEmitter.on("data_received",function(){
//     console.log("数据接收成功！");
// })

// eventEmitter.emit('connection');

// console.log("程序执行完毕")

//----------------------------------------------------------------------------------

//Buffer缓冲区

//写入缓冲区
// var buf = Buffer.alloc(4);
// var len = buf.write("huangjie");
// console.log("写入的字节数："+len);
//-------------------------------------------------------------------------
//读取缓冲区
// var buf = Buffer.alloc(256);
// for (let i = 0; i < 26; i++) {
//      buf[i] = i + 97;
// }

// console.log(buf.toString('ascii'))

// console.log(buf.toString('ascii',0,5))

// console.log(buf.toString('utf8',0,5))
//-----------------------------------------------------------------------

//将 Buffer 转换为 JSON 对象

// const buf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
// const json = JSON.stringify(buf);
// console.log(json);

// const copy = JSON.parse(json,(key,value)=>{
//     return value && value.type == "Buffer" ? Buffer.from(value.data) : value;
// })

// console.log(copy)

//---------------------------------------------------------------------------
//缓冲区合并
// var buffer1 = Buffer.from("菜鸟教程")
// var buffer2 = Buffer.from("www.runoob.com")
// var buffer3 = Buffer.concat([buffer1,buffer2])
// console.log(buffer3.toString())

//---------------------------------------------------------------------------
//缓冲区比较
// var buffer1 = Buffer.from("菜鸟教程")
// var buffer2 = Buffer.from("www.runoob.com")
// var bool = buffer1.compare(buffer2)

// if(bool<0){
//     console.log(buffer1 + "在" + buffer2 + "之前")
// }else if(bool = 0){
//     console.log(buffer1 + "在" + buffer2 + "相同")
// }else{
//     console.log(buffer1 + "在" + buffer2 + "之后")
// }

//---------------------------------------------------------------------
//拷贝缓冲区
// var buf1 = Buffer.from("wwwbaiducom")
// var buf2 = Buffer.from("sada")
// buf2.copy(buf1,2)
// console.log(buf1.toString())

//-----------------------------------------------------------------------
//缓冲区裁剪
// var buf1 = Buffer.from("www.baidu.com")
// var buf2 = buf1.slice(0,2);
// console.log(buf2.toString())

//-----------------------------------------------------------------------
//缓冲区长度
// var buf1 = Buffer.from("www.baidu.com")
// var buflen = buf1.length;
// console.log(buflen)




//-------------------------------------------------------------------------
// Node.js Stream(流)

// Stream 有四种流类型：
// Readable - 可读操作。
// Writable - 可写操作。
// Duplex - 可读可写操作.
// Transform - 操作被写入数据，然后读出结果。

//所有的 Stream 对象都是 EventEmitter 的实例。常用的事件有：
// data - 当有数据可读时触发。
// end - 没有更多的数据可读时触发。
// error - 在接收和写入过程中发生错误时触发。
// finish - 所有数据已被写入到底层系统时触发。



//示例：从流中读取数据
// var fs = require("fs");
// var data = "";

// var readerStream = fs.createReadStream('index.txt');
// readerStream.setEncoding('utf8');

// readerStream.on('data',function(chunk){
//     data =  chunk
// })

// readerStream.on('end',function(){
//     console.log(data)
// })

// readerStream.on('error',function(err){
//     console.log(err.stack)
// })

// console.log("程序执行完毕")

//--------------------------------------------------------------------
//写入流
// var fs = require('fs')
// var data = "百度官方地址：www.baidu.com"

//创建一个可以写入的流，写入到文件output.txt中
// var writeStream = fs.createWriteStream('output.txt');

//使用utf8编码写入数据
// writeStream.write(data,'utf8');

//标记文件末尾
// writeStream.end();

//处理流事件-->data,end,and error
// writeStream.on('finish',function(){
//     console.log("写入完成")
// })


// writeStream.on("error",function(error){
//     console.log(error.stack)
// })

// console.log("程序执行完毕")


//--------------------------------------------------------------------
//管道流
// var fs = require('fs');
// var readerStream = fs.createReadStream('index.txt');
// var writeStream = fs.createWriteStream('output2.txt');

// readerStream.pipe(writeStream);

// console.log("程序执行完毕")


//-----------------------------------------------------------------------
//链式流 压缩文件
// var fs = require('fs');
// var zlib = require('zlib');

// fs.createReadStream('index.txt').
// pipe(zlib.createGzip()).
// pipe(fs.createWriteStream('input.txt.gz'));

// console.log("Done！")

//解压文件
// var fs = require('fs');
// var zlib = require('zlib');

// fs.createReadStream('input.txt.gz')
// .pipe(zlib.createGzip())
// .pipe(fs.createWriteStream('output3.txt'))

// console.log('Done!')

//-------------------------------------------------------------------
//模块
// var hello = require('./hello');
// hello.world();

//-------------------------------------------------------------------
//函数传递是如何让HTTP服务器工作的
// var http = require('http');

// http.createServer(function(request,response){
//     response.writeHead(200,{'Content-Type':'text/plain'});
//     response.write("Hello World!");
//     response.end();
// }).listen(8888);


//---------------------------------------------------------------------
//获取get请求内容
// var http = require('http');
// var url = require('url');
// var util = require('util');

// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
//     res.end(util.inspect(url.parse(req.url, true)));
// }).listen(3000);

//获取URL参数
// var http = require('http');
// var url = require('url');
// var util = require('util');

// http.createServer(function(req,res){
//     res.writeHead(200, { 'Content-Type': 'text/plain','charset':'utf8'});

//     var params = url.parse(req.url,true).query;
//     res.write("网站名："+ params.name)
//     res.write('\n');
//     res.write('网站URL：'+ params.url)
//     res.end()
// }).listen(3000);

//-------------------------------------------------------------
//获取post请求的内容
var http = require('http');
var querystring = require('querystring');

var postHTML =
    '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
    '<body>' +
    '<form method="post">' +
    '网站名： <input name="name"><br>' +
    '网站 URL： <input name="url"><br>' +
    '<input type="submit">' +
    '</form>' +
    '</body></html>';

http.createServer(function (req, res) {
    var body = "";
    req.on('data', function (chunk) {
        body += chunk;
    });
    req.on('end', function () {
        // 解析参数
        body = querystring.parse(body);
        // 设置响应头部信息及编码
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf8' });

        if (body.name && body.url) { // 输出提交的数据
            res.write("网站名：" + body.name);
            res.write("<br>");
            res.write("网站 URL：" + body.url);
        } else {  // 输出表单
            res.write(postHTML);
        }
        res.end();
    });
}).listen(3000);