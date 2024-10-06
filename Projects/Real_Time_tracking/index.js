// const WebSocket = require('ws');
// const spawn = require('child_process').spawn;

// const wss = new WebSocket.Server({ port: 8000 }); // WebSocket server on port 8080

// wss.on('connection', (ws) => {
//   console.log('Client connected');

//   // Start FFmpeg process
//   const ffmpeg = spawn('ffmpeg', [
//     '-re', // Read input at native frame rate
//     '-i', 'pipe:0', // Input from pipe
//     '-c:v', 'libx264', // Video codec
//     '-f', 'flv', // Format
//     'rtmp://172.31.187.139/live/test' // RTMP server URL
//   ]);

//   // Handle FFmpeg output
//   ffmpeg.stdout.on('data', (data) => {
//     console.log('FFmpeg output:', data.toString());
//   });

//   ffmpeg.stderr.on('data', (data) => {
//     console.error('FFmpeg error:', data.toString());
//   });

//   // Forward WebSocket data to FFmpeg
//   ws.on('message', (data) => {
//     console.log('Received data length:', data.length);
//     ffmpeg.stdin.write(data);
//   });
  

//   ws.on('close', () => {
//     console.log('Client disconnected');
//     ffmpeg.stdin.end();
//     ffmpeg.kill();
//   });
// });

// console.log('WebSocket server running on ws://localhost:8080');




// const express = require('express');
// const http = require('http');
// const { Server } = require('socket.io');

// const app = express();
// const server = http.createServer(app);
// const io = new Server(server);

// io.on('connection', (socket) => {
//     console.log('A user connected:', socket.id);

//     // Relay signaling data to other clients
//     socket.on('signal', (data) => {
//         console.log('Received signal:', data);
//         socket.broadcast.emit('signal', data);
//         console.log(data);
//     });

//     socket.on('disconnect', () => {
//         console.log('User disconnected:', socket.id);
//     });
// });

// server.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });

const express = require('express');
const http = require('http');
const path = require('path');
const { Server } = require('socket.io');
const fs = require('fs');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Serve video files
app.get('/video/:filename', (req, res) => {
    console.log(`Video request received: ${req.params.filename}`);
    const filePath = path.join(__dirname, 'public', 'videos', req.params.filename);
    const stat = fs.statSync(filePath);
    const fileSize = stat.size;
    const range = req.headers.range;
    if (range) {
        const parts = range.replace(/bytes=/, "").split("-");
        const start = parseInt(parts[0], 10);
        const end = Math.min(start + 1000000, fileSize - 1);
        const chunkSize = (end - start) + 1;
        const file = fs.createReadStream(filePath, { start, end });
        const head = {
            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunkSize,
            'Content-Type': 'video/mp4',
        };
        res.writeHead(206, head);
        file.pipe(res);
        console.log(`Streaming video chunk: ${start}-${end}`);
    } else {
        const head = {
            'Content-Length': fileSize,
            'Content-Type': 'video/mp4',
        };
        res.writeHead(200, head);
        fs.createReadStream(filePath).pipe(res);
        console.log(`Streaming entire video: ${req.params.filename}`);
    }
});

io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    // Relay signaling data to other clients
    socket.on('signal', (data) => {
        console.log('Received signal:', data);
        socket.broadcast.emit('signal', data);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
