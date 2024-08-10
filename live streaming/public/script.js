const http = require('http');
const express = require('express');
const { Server: SocketIO } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new SocketIO(server);
const PORT = process.env.PORT || 8000;

// Store users and their media status
const users = new Map();

app.get('/users', (req, res) => {
    return res.json(Array.from(users.entries()));
});

io.on('connection', socket => {
    console.log(`User connected: ${socket.id}`);
    
    // Add user to the map with default media status
    users.set(socket.id, { video: true, audio: true });

    // Notify all users about the new user
    io.emit('user:joined', { id: socket.id, video: true, audio: true });

    socket.on('toggle:media', data => {
        const { type, status } = data;
        if (users.has(socket.id)) {
            users.get(socket.id)[type] = status;
            io.emit('user:mediaChanged', { id: socket.id, type, status });
        }
    });

    socket.on('disconnect', () => {
        console.log(`User disconnected: ${socket.id}`);
        users.delete(socket.id);
        io.emit('user:disconnect', { id: socket.id });
    });
});

app.use(express.static(path.resolve('./public')));

server.listen(PORT, () => console.log(`Server started at PORT:${PORT}`));
