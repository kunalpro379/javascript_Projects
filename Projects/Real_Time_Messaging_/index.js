const http = require('http');
const express = require('express');
const path = require('path');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);


let messageHistory = [];

app.use(express.static(path.resolve(__dirname, './public')));

// Socket.io connection handling
io.on("connection", (socket) => {
    console.log("A new user has connected:", socket.id);
    console.log("\n");

    // Send chat history
    socket.emit("message_history", messageHistory);

    socket.on("user_message", (message) => {
        console.log("A new user message arrived:", message);
        
        const userMessage = { userId: socket.id, message: message };
        messageHistory.push(userMessage);
       
        io.emit("message", userMessage);
    });
});

app.get("/", (req, res) => {
    return res.sendFile(path.resolve(__dirname, './public/index.html'));
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
