const http = require('http');
const express = require('express');
const path = require('path');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.resolve(__dirname, './public')));

// Socket.io connection handling
io.on("connection", (client) => {
    console.log("A new user has connected:", client.id);
    console.log("\n");
    client.on("user_message", (message)=>{
        console.log("a new user message arrived : ",message);
        io.emit("message", message);
    });


});

app.get("/", (req, res) => {
    return res.sendFile(path.resolve(__dirname, './public/index.html'));
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
