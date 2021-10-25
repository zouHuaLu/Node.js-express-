const EventEmitter = require('events');

const door = new EventEmitter()

// 触发事件
door.emit("slam",123)

door.on("slam",data=>{
    console.log(data)
})

// console.log(door.eventNames())