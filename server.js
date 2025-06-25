const cors = require('cors');
const next = require('next');
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const Pusher = require('pusher');
const Sentiment = require('sentiment');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;

const app = next({ dev });
const handle = app.getRequestHandler();
const sentiment = new Sentiment();

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_APP_KEY,
  secret: process.env.PUSHER_APP_SECRET,
  cluster: process.env.PUSHER_APP_CLUSTER,
  useTLS: true
});

const chatHistory = { messages: [] };

app.prepare().then(() => {
  const server = express();

  server.use(cors());
  server.use(bodyParser.json());

  server.post('/message', (req, res) => {
    const { user, message, timestamp } = req.body;
    const score = sentiment.analyze(message).score;
    const chat = { user, message, timestamp, sentiment: score };

    chatHistory.messages.push(chat);
    pusher.trigger('chat-room', 'new-message', { chat });

    res.send({ status: 'ok' });
  });

  server.post('/messages', (req, res) => {
    res.send({ messages: chatHistory.messages });
  });

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
