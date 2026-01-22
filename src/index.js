const pino = require('pino');
const express = require('express');
const createApp = require('../frontend/main').default;

const { resolve } = require('path');
const { renderToString } = require('@vue/server-renderer');

const app = express();
const logger = pino();

app.use('/client', express.static(resolve(__dirname, '../dist/client')));

app.get('/', async (req, res) => {
  let { app: vueApp } = createApp();
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
