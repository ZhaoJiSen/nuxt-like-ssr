const pino = require('pino');
const express = require('express');
const createApp = require('../frontend/main').default;

const { resolve } = require('path');
const { createMemoryHistory } = require('vue-router');
const { renderToString } = require('@vue/server-renderer');
const { createRouterInstance } = require('../frontend/router');

const app = express();
const logger = pino();

app.use('/client', express.static(resolve(__dirname, '../dist/client')));

app.get('/*', async (req, res) => {
  let { app: vueApp } = createApp();
  // 服务端没有浏览器环境（location/history API 不存在），必须用内存路由避免依赖 DOM
  let router = createRouterInstance(createMemoryHistory());

  vueApp.use(router);

  // 先把服务端路由切到当前请求的 URL，确保渲染的是正确页面
  await router.push(req.url || '/');
  // 等待路由就绪（包含异步路由组件/路由守卫），避免 SSR 渲染出错或内容不完整
  await router.isReady();

  let appString = await renderToString(vueApp);

  res.send(
    `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      <div id="app">${appString}</div>
      <script src="/client/client_bundle.js"></script>
    </body>
    </html>
    `,
  );
});

app.listen(9999, () => {
  logger.info('Server is running at http://localhost:9999');
});
