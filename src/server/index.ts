import next from 'next';
import nextI18NextMiddleware from 'next-i18next/middleware';
import compression from 'compression';
import express from 'express';
import { NextI18NextInstance } from '../lib/i18n/i18n';
import dotenv from 'dotenv';
import { sendEmail } from './mailer';
import bodyParser from 'body-parser';
import { isAnyFormFieldEmpty } from '../utils/isFormFieldEmpty';
import * as path from 'path';
import { languages } from '../constants/languages';

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

    if (isAnyFormFieldEmpty({ email, name, message, subject })) {
      res.status(400).send({ error: 'Empty field' });
    }

    try {
      await sendEmail({ email, name, subject, message });
      res.send({ message: 'Message send' });
    } catch (e) {
      res.status(401).send({ error: e });
    }
  });

  server.get('/cv/:language', (req, res) => {
    let language = req.params.language;

    if (!Object.values(languages).includes(language)) {
      language = languages.english;
    }

    const cvPath = path.join(
      __dirname,
      `../../cv/CV_${language.toUpperCase()}.pdf`,
    );
    res.sendFile(cvPath);
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
  });
})();
