const http = require('http');
const path = require('path');
const express = require('express');

const app = express();
const server = http.createServer(app);

// Serve static files from the "public" directory in your project
app.use(express.static(path.resolve(__dirname, 'public')));

server.listen(3000, () => {
  console.log('HTTP Server is running on PORT 3000');
});
