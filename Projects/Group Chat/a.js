const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const port = 3001;

app.use(express.static('.')); // Serve static files from the current directory

let offer = null;
let candidates = [];

app.post('/offer', (req, res) => {
  offer = req.body;
  io.emit('offer', offer);
  res.send('Offer received');
});

app.post('/ice-candidate', (req, res) => {
  const candidate = req.body;
  candidates.push(candidate);
  io.emit('ice-candidate', candidate);
  res.send('ICE candidate received');
});

io.on('connection', (socket) => {
  console.log('New client connected');

  if (offer) {
    socket.emit('offer', offer);
    candidates.forEach(candidate => socket.emit('ice-candidate', candidate));
  }

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
