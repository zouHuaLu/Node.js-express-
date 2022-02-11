// Buffer是内存区域，他表示在V8 JavaScript引擎外分配的固定大小的内存块

// 创建Buffer
let str = "Hey!";
// const buf = Buffer.from(str)
// console.log(str.charCodeAt(1))
// console.log(buf,buf[0],buf[1])
// console.log(buf.toString())

const buf1 = Buffer.alloc(4);
buf1.write("xixi");
console.log(buf1.length);
console.log(buf1);
console.log(buf1.toString());
