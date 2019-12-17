import next from 'next';
import nextI18NextMiddleware from 'next-i18next/middleware';
import compression from 'compression';
import express from 'express';
import { NextI18NextInstance } from '../lib/i18n/i18n';
import dotenv from 'dotenv';
import { sendEmail } from './mailer';
import bodyParser from 'body-parser';
import { isEmpty } from '../utils/isEmpty';

dotenv.config();
const port = parseInt(process.env.PORT ?? '3000', 10);
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

(async () => {
  await app.prepare();
  const server = express();
  server.use(nextI18NextMiddleware(NextI18NextInstance));
  server.use(compression());
  server.use(bodyParser.json());

  server.post('/api/contact', async (req, res) => {
    const { email, name, message, subject } = req.body;

    if (
      isEmpty(email) ||
      isEmpty(name) ||
      isEmpty(message) ||
      isEmpty(subject)
    ) {
      res.status(400).send({ error: 'Empty field' });
    }

    try {
      await sendEmail({ email, name, subject, message });
      res.send({ message: 'Message send' });
    } catch (e) {
      res.status(401).send({ error: e });
    }
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
  });
})();
