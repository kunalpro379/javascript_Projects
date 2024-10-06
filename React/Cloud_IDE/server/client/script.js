const socket = io('http://localhost:3000');

// Event listener for textarea input
document.getElementById('editor').addEventListener('input', (event) => {
  const newText = event.target.value;
  socket.emit('codeChange', newText);
});

// Event listener for code updates from other clients
socket.on('codeUpdate', (newCode) => {
  document.getElementById('editor').value = newCode;
});

// Event listener for the Run button
document.getElementById('run').addEventListener('click', () => {
  const text = document.getElementById('editor').value;
  document.getElementById('output').textContent = text;
});

// Event listener for adding files
document.getElementById('addFile').addEventListener('click', () => {
  const filename = document.getElementById('filename').value;
  if (filename) {
    const listItem = document.createElement('li');
    listItem.textContent = filename;
    listItem.style.cursor = 'pointer';
    listItem.addEventListener('click', () => {
      alert(`Opening file: ${filename}`);
    });
    document.getElementById('fileList').appendChild(listItem);
    document.getElementById('filename').value = '';
  }
});
