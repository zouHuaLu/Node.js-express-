// 用于从底层的操作系统和程序运行所在的计算机上检索信息并与其交互

const os = require('os');

// 返回底层架构的字符串
// console.log(os.arch())

// 返回可用的cpu信息
// console.log(os.cpus())

// 返回可用内存的字节数
// console.log(os.freemem())

// 返回主机名
console.log(os.hostname())