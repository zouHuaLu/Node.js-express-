之前记录过 nodejs 相关的，现在删掉重新记录，重新学习

全局安装一下 nodemon，以 nodemon 来运行文件
npm install -g nodemon

# 全局对象解析

Node:global

浏览器:window

global:

- Buffer
- console
- setTimeout,
- setInterval,
- clearTimeout,
- clearInterval,
- process

1. exit 当进程准备退出时触发

**题目 1**

```js
process.on("exit", function (code) {
  setTimeout(function () {
    console.log("位置1");
  }, 0);
  console.log("位置2");
});

console.log("程序执行结束");

// 输出：
// 程序执行结束
// 位置2=0
// 位置1不会输出，因为程序已经退出了
```

**题目 2**

```js
console.log(this);
// 输出: {}

module.exports.foo = 5;
console.log(this);
// 输出：{foo:5}

// 说明在Nodejs模块中打印this，输出的不是全局global，输出的是module.exports
```

2. uncaughtException 未捕获到的错误

## nodejs 事件循环

- poll：执行 I/O 相关的回调，除了 close callback、timers、setImmdiate，其余的都在此阶段执行
- check：setImmdiate 的回调在此阶段执行
- close callbacks：一些关闭的回调在此阶段执行，socket.on('close',()=>{})
- timers：setTimeout 和 setInterval 的回调
- pending callbacks：推迟到下一个循环迭代的 I/O 回调
- idle,prepare：系统内部使用的东西

**以上每个阶段结束后都会执行 nextTick 队列**

**题目 3：setImmediate 和 setTimeout 的区别**

答：基本行为相似，但是在不同时机下的调用，行为会发生改变。

- setImmediate 在当前 poll 阶段完成后，也就是在 check 阶段执行
- setTimeout 以毫秒为最小阈值，执行脚本

1. 主模块中执行

```js
// 0毫秒
setTimeout(() => {
  console.log("timeout");
}, 0);

setImmediate(() => {
  console.log("immediate");
});

// 执行结果:
// 在主模块中执行，输出的顺序随机的并不固定的
```

2. 在同一个 I/O 回调中，即在一个输入或者输出的回调中

```js
const fs = require("fs");

fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log("timeout");
  }, 0);

  setImmediate(() => {
    console.log("immediate");
  });
});

// 执行结果：
// immediate
// timeout
```

**题目 4：为什么在主模块中两者的执行顺序不固定？**

答：

在主代码部分执行 setTimeout 设置定时器，不一定写入队列。

setImmediate 写入 check 队列

第一阶段是 timers,timers 队列可能为空，也可能存在回调

timers 阶段为空 =》 check 阶段执行 setImmediate => timers setTimeout

timers 阶段有回调 =》 check 阶段执行 setImmediate => timers setTimeout

### 微任务

1. process.nextTick()回调

2. Promise.then()回调

优先级上：peocess.nextTick > Promise.then()

**题目 5：输出顺序**

```js
async function async1() {
  console.log("async1 start");
  await async2();
  await async2()相当于
  // new Promise((resolve)=>{
  //   console.log("async2")
  // }).then(()=>{
  // console.log("async1 end");
  // })
  console.log("async1 end");
}

async function async2() {
  console.log("async2");
}

console.log("script start");

setTimeout(function () {
  console.log("setTimeout");
  setTimeout(function () {
    console.log("setTimeout1");
  }, 0);
  setImmediate(() => {
    console.log("setImmediate");
  });
}, 0);

process.nextTick(() => console.log("nextTick"));

async1();

new Promise(function (resolve) {
  console.log("promise1");
  resolve();
  console.log("promise2");
}).then(function () {
  console.log("promise3");
});

console.log("script end");
```

答：

script start

async1 start

async2

promise1

promise2

script end

nextTick

async1 end

promise3

setTimeout

setImmediate

setTimeout1
