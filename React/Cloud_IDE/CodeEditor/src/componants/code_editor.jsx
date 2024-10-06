import React, { useState, useEffect } from 'react';

const EditorLayout = ({ socket }) => {
  const [text, setText] = useState('');
  const [output, setOutput] = useState('');
  const [filename, setFilename] = useState('untitled.txt');
  const [files, setFiles] = useState([]);

  useEffect(() => {
    socket.on('codeUpdate', (newCode) => {
      console.log('Code update received:', newCode); // Log received code
      setText(newCode);
    });

    return () => {
      socket.off('codeUpdate');
    };
  }, [socket]);

  const handleChange = (event) => {
    const newText = event.target.value;
    setText(newText);
    socket.emit('codeChange', newText);
  };

  const handleRun = () => {
    setOutput(text);
  };

  const handleAddFile = () => {
    if (filename) {
      setFiles([...files, filename]);
      setFilename('');
    }
  };

  const handleFileClick = (file) => {
    alert(`Opening file: ${file}`); // Implement file opening logic here
  };

  return (
    <div style={{ display: 'flex', height: '100vh', margin: 0, padding: 0 }}>
      {/* Left side: Code editor and terminal */}
      <div style={{ flex: 3, display: 'flex', flexDirection: 'column', borderRight: '1px solid #ccc' }}>
        {/* Code editor */}
        <div style={{ flex: 7, padding: '10px', display: 'flex', flexDirection: 'column' }}>
          <textarea
            value={text}
            onChange={handleChange}
            rows="15"
            style={{ width: '100%', height: '100%', boxSizing: 'border-box', fontFamily: 'monospace' }}
          />
        </div>
        {/* Terminal */}
        <div style={{ flex: 3, padding: '10px', backgroundColor: 'black', color: 'white', borderTop: '1px solid #ccc', overflowY: 'auto' }}>
          <button onClick={handleRun} style={{ marginBottom: '10px' }}>Run</button>
          <pre>{output}</pre>
        </div>
      </div>
      {/* Right side: File stack */}
      <div style={{ flex: 1, padding: '10px', borderLeft: '1px solid #ccc', overflowY: 'auto' }}>
        <input
          type="text"
          value={filename}
          onChange={(e) => setFilename(e.target.value)}
          placeholder="New File Name"
          style={{ width: '100%', marginBottom: '10px' }}
        />
        <button onClick={handleAddFile}>Add File</button>
        <div>
          <h3>Files</h3>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {files.map((file, index) => (
              <li key={index} onClick={() => handleFileClick(file)} style={{ cursor: 'pointer', margin: '5px 0' }}>
                {file}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EditorLayout;
