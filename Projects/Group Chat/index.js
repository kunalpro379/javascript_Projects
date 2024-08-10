const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mongoose = require('mongoose');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// MongoDB connection
mongoose.connect('mongodb+srv://kunaldp379:kunal@cluster0.jwet3l9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const groupSchema = new mongoose.Schema({
  groupId: { type: String, unique: true },
  users: [String]
});

const Group = mongoose.model('Group', groupSchema);

// Serve static files from the "public" directory
app.use(express.static('.'));

// Handle Socket.IO connections
io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('joinGroup', async ({ userId, groupId }) => {
    let group = await Group.findOne({ groupId });

    if (!group) {
      // Create new group
      group = new Group({ groupId, users: [userId] });
      await group.save();
      console.log(`Group ${groupId} created`);
    } else {
      // Update group with new user
      if (!group.users.includes(userId)) {
        group.users.push(userId);
        await group.save();
        console.log(`User ${userId} added to group ${groupId}`);
      }
    }

    socket.join(groupId);
    console.log(`User ${userId} joined group ${groupId}`);
    io.to(groupId).emit('message', { userId, message: `${userId} has joined the group` });

    socket.on('message', ({ userId, groupId, message }) => {
      io.to(groupId).emit('message', { userId, message });
    });

    socket.on('disconnect', () => {
      console.log('User disconnected');
      Group.findOneAndUpdate(
        { groupId },
        { $pull: { users: userId } },
        { new: true }
      ).then(updatedGroup => {
        if (updatedGroup.users.length === 0) {
          Group.deleteOne({ groupId }).then(() => {
            console.log(`Group ${groupId} deleted`);
          });
        }
      });
    });
  });
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});