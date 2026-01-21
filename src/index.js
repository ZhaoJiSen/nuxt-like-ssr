const pino = require('pino');
const express = require('express');

const app = express();
const logger = pino();

app.get('/', (req, res) => {
  res.send(
    `
    <h1>Hi there 123</h1>
    `,
  );
});

app.listen(9999, () => {
  logger.info('Server is running at http://localhost:9999');
});
