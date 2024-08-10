// public/main.js
const socket = io();

const localVideo = document.getElementById('localVideo');
const remoteVideo = document.getElementById('remoteVideo');
const callButton = document.getElementById('callButton');

let localStream;
let peer;

// Get user media (audio/video)
navigator.mediaDevices.getUserMedia({ video: true, audio: true })
  .then(stream => {
    localVideo.srcObject = stream;
    localStream = stream;

    // Handle incoming signals (SDP and ICE candidates)
    socket.on('signal', data => {
      if (data.source !== socket.id) {
        console.log('Signal received from: ', data.source);
        peer.signal(data.signal);
      }
    });

    // Handle call button click
    callButton.addEventListener('click', () => {
      // Initialize a new peer connection
      peer = new SimplePeer({ initiator: true, stream: localStream });

      // Send SDP and ICE candidates to the recipient
      peer.on('signal', data => {
        console.log('Sending signal to: ', data.target);
        socket.emit('signal', { target: data.target, signal: data });
      });

      // Handle remote stream
      peer.on('stream', stream => {
        console.log('Remote stream received');
        remoteVideo.srcObject = stream;
      });
    });
  })
  .catch(error => {
    console.error('Error accessing media devices:', error);
  });
