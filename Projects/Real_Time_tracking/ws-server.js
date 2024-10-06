const WebSocket = require('ws');
const ffmpeg = require('fluent-ffmpeg');
const { spawn } = require('child_process');

const wss = new WebSocket.Server({ port: 3001 });

wss.on('connection', (ws) => {
    console.log('Client connected');

    const ffmpegProcess = ffmpeg()
        .input('pipe:0')
        .inputFormat('webm')
        .outputOptions([
            '-c:v libx264', 
            '-preset veryfast', 
            '-tune zerolatency',
            '-f flv'
        ])
        .output('rtmp://localhost/live/test')
        .on('start', (commandLine) => {
            console.log('FFmpeg started with command: ' + commandLine);
        })
        .on('error', (err, stdout, stderr) => {
            console.log('FFmpeg error: ' + err.message);
            console.log('stdout: ' + stdout);
            console.log('stderr: ' + stderr);
        })
        .on('end', () => {
            console.log('FFmpeg process finished');
        });

    ffmpegProcess.run();

    ws.on('message', (data) => {
        if (ffmpegProcess.stdin.writable) {
            ffmpegProcess.stdin.write(data);
        }
    });

    ws.on('close', () => {
        console.log('Client disconnected');
        ffmpegProcess.stdin.end();
    });

    ws.on('error', (err) => {
        console.error('WebSocket error: ', err);
        ffmpegProcess.stdin.end();
    });
});

console.log('WebSocket server running on ws://localhost:3001');
