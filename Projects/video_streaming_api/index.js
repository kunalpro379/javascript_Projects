const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const SimplePeerServer = require('simple-peer-server');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files from the 'public' directory (optional)
app.use(express.static('public'));

// Socket.io setup
io.on('connection', socket => {
  console.log('User connected: ' + socket.id);

  // Initialize SimplePeerServer
  const simplePeerServer = new SimplePeerServer(socket);

  // Handle WebRTC signal events
  socket.on('signal', data => {
    console.log('Signal received: ', data);
    // Send signal data to the recipient
    socket.to(data.target).emit('signal', {
      source: socket.id,
      target: data.target,
      signal: data.signal
    });
  });

  // Handle disconnect
  socket.on('disconnect', () => {
    console.log('User disconnected: ' + socket.id);
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
