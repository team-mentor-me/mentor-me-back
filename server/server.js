// package imports
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

// server addons
const server = express();
server.use(helmet());
server.use(morgan('dev'));
server.use(express.json());
server.use(
  cors({
    credentials: true,
    origin: true
  })
  // this goes under object of imports
  // axios.defaults.withCredentials = true;
);

// middleware
const { auth } = require('../auth/auth');

// route imports
const userRouter = require('../user/user-route');
const postRouter = require('../post/post-route');
const conversationRouter = require('../conversation/conversation-route');

// apply routes
server.use('/api', userRouter);
server.use('/api', auth, postRouter);
server.use('/api', auth, conversationRouter);

server.get('/', (req, res) => {
  res.json({ message: 'Server is live!' });
});

module.exports = server;
