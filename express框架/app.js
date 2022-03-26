const express = require('express')
const app = express()
const port = 3000

// 路由
app.get('/', (req, res) => res.send('Hello World!'))

// 设置服务
app.listen(port, () => console.log(`服务已启动，运行在 http://localhost:3000/`))