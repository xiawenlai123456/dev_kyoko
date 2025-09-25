// 引入 express 模块
const express = require('express');

// 创建一个 express 应用实例
const app = express();
const port = 3000;

// 定义一个路由，当访问根路径 "/" 时执行
/* app.get('/', (req, res) => {
  res.send('Hello from Express!');
}); */
// 设置静态文件目录，Express 会自动在该目录下寻找文件
app.use(express.static('public'));

// 启动服务器并在指定端口上监听
app.listen(port, () => {
  console.log(`Express 服务器正在运行，请访问 http://localhost:${port}`);
});