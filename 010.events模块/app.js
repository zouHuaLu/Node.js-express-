const eventsEmitter = require('events');

const events = new eventsEmitter()

events.on('start',(res)=>{
    console.log(`开始${res}`)
})

events.emit('start',(123))