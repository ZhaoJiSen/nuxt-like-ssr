const pino = require('pino');
const express = require('express');
const createApp = require('../frontend/main').default;

const { resolve } = require('path');
const { createMemoryHistory } = require('vue-router');
const { renderToString } = require('@vue/server-renderer');
const { createPiniaInstance } = require('../frontend/store');
const { createRouterInstance } = require('../frontend/router');

const app = express();
const logger = pino();

app.use('/client', express.static(resolve(__dirname, '../dist/client')));

app.get('/*', async (req, res) => {
  let { app: vueApp } = createApp();

  let pinia = createPiniaInstance();
  let router = createRouterInstance(createMemoryHistory());

  vueApp.use(router);
  vueApp.use(pinia);

  await router.push(req.url || '/');
  await router.isReady();

  let appString = await renderToString(vueApp);
  let state = JSON.stringify(pinia.state.value).replace(/</g, '\\u003c');

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
      <script>window.__INITIAL_STATE__=${state}</script>
      <script src="/client/client_bundle.js"></script>
    </body>
    </html>
    `,
  );
});

app.listen(9999, () => {
  logger.info('Server is running at http://localhost:9999');
});
