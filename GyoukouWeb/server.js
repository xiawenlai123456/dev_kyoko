// 引入 Node.js 内置的 http 模块
const http = require('http');

// 定义服务器的监听主机名和端口
const hostname = '127.0.0.1'; // 或者 'localhost'
const port = 3000;

// 创建一个 HTTP 服务器
const server = http.createServer((req, res) => {
  // 设置响应头，指定状态码为 200 (OK)，内容类型为纯文本
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // 向客户端发送响应内容
  res.end('Hello, World!\n');
});

// 启动服务器，并在指定的主机名和端口上监听
server.listen(port, hostname, () => {
  console.log(`服务器正在运行，请访问 http://${hostname}:${port}/`);
});