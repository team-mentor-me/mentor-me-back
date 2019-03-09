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

// data imports

// route imports
const userRouter = require('../user/user-route');

// apply routes
server.use('/api', userRouter);

server.get('/', (req, res) => {
  res.send("It's alive!");
});

module.exports = server;
