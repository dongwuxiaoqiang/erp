const express = require('express');
const responseInterceptor = require('./middlewares/responseInterceptor');
const authInterceptor = require('./middlewares/authInterceptor');
const routers = require('./routes')

const app = express();
const port = 3000;

// 初始化数据
require('./db/init.js');

// 使用中间件
app.use(authInterceptor);

// 解析请求体中的 JSON 数据
app.use(express.json());

// 解析请求的表单参数 name=xxx&password=xxx
app.use(express.urlencoded({ extended: false }))

// 使用中间件
app.use(responseInterceptor);

// 引入 api.js 路由
for (const r of routers) {
  app.use('/api', r);
}

// 启动服务器
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
