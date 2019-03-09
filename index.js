// env access
require('dotenv').config();

// server import
const server = require('./server/server');

// dynamic port availability for postgres
const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`\n** Running on port ${port} **\n`);
});
