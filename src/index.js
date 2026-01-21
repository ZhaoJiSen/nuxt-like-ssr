const pino = require('pino');
const express = require('express');

import createApp from '../frontend/main';
import { renderToString } from '@vue/server-renderer';

const app = express();
const logger = pino();

app.get('/', async (req, res) => {
  let { app } = createApp();
  let appString = await renderToString(app);

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
      <div id="app>${appString}</div>
    </body>
    </html>
    `,
  );
});

app.listen(9999, () => {
  logger.info('Server is running at http://localhost:9999');
});
