class EventEmitter {
  constructor() {
    this.events = {};
  }
  // 触发监听事件,事件与回调是一对一或者一对多的关系
  emit(event, ...args) {
    if (!this.events[event]) {
      console.log("该事件未注册！");
    }
    let callbacks = this.events[event];
    callbacks.forEach((cb) => {
      cb.apply(this, args);
    });
    return this;
  }
  // 创建监听事件
  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
    return this;
  }
  // 创建监听一次的事件
  once(event, callback) {
    //对回调函数做一层包装
    const func = (...args) => {
      // 移除监听事件
      this.off(event, fun);
      //   执行回调
      callback.apply(this, args);
    };
    // 创建监听事件，并将包装好的回调传入
    this.on(event, func);
    return this;
  }
  // 移除事件监听
  off(event, callback) {
    this.events[event] = this.events[event].filter((item) => item != callback);
    return this;
  }
}

let eventemit = new EventEmitter();

eventemit.on("message", function (e, r) {
  console.log(e, r);
});

eventemit.emit("message", 3, 2);
