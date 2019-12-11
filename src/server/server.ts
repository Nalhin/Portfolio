import next from 'next';
import nextI18NextMiddleware from 'next-i18next/middleware';
import compression from 'compression';
import express from 'express';
import { NextI18NextInstance } from '../lib/i18n/i18n';

const port = parseInt(process.env.PORT || '3000', 10);
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

(async () => {
  await app.prepare();
  const server = express();
  server.use(nextI18NextMiddleware(NextI18NextInstance));
  server.use(compression());

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
  });
})();
