const { WebSocketServer } = require('ws');
const http = require('http');
const uuidv4 = require('uuid').v4;

// Create an HTTP server
const server = http.createServer();
const wsServer = new WebSocketServer({ server });
const port = 8000;

// Create a clients object to store WebSocket connections
const clients = {}; // Define the clients object

wsServer.on('connection', function(connection) {
    // Generate a unique code for every user
    const userId = uuidv4();
    console.log(`Received a new connection.`);
  
    // Store the new connection
    clients[userId] = connection;
    console.log(`${userId} connected.`);

    // Send the updated user list to all clients
    const updateUserList = () => {
        const userList = Object.keys(clients);
        const message = JSON.stringify({ type: 'user-list', users: userList });
        for (const id in clients) {
            clients[id].send(message);
        }
    };
    updateUserList(); // Initial user list update

    // Handle messages from this connection
    connection.on('message', (message) => {
        console.log(`Message from ${userId}: ${message}`);
        try {
            const data = JSON.parse(message);
            // Broadcast the message to all clients
            for (const id in clients) {
                if (id !== userId) {
                    clients[id].send(message);
                }
            }
        } catch (error) {
            console.error('Error parsing message:', error);
        }
    });

    // Handle connection closure
    connection.on('close', () => {
        console.log(`${userId} disconnected.`);
        delete clients[userId];
        updateUserList(); // Update user list on disconnect
    });
});

server.listen(port, () => {
    console.log(`WebSocket server is running on port ${port}`);
});
