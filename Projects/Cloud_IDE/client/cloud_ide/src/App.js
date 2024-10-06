import React, { useState, useRef, useEffect } from 'react';
import MonacoEditor from 'react-monaco-editor';
import useWebSocket from 'react-use-websocket';
import { Amplify } from 'aws-amplify';
import { API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';
// Configure Amplify with your AWS setup
Amplify.configure(awsconfig);
import './App.css';
import DrawingCanvas from './DrawingCanvas'; // Import the DrawingCanvas component


const WS_URL = 'ws://127.0.0.1:8000';

// Define your GraphQL queries and mutations
const getCodeFile = `query GetCodeFile($fileId: ID!, $version: Int!) { getCodeFile(fileId: $fileId, version: $version) { fileId version userId content } }`;
const createCodeFile = `mutation CreateCodeFile($fileId: ID!, $version: Int!, $userId: String!, $content: String!) { createCodeFile(fileId: $fileId, version: $version, userId: $userId, content: $content) { fileId version userId content } }`;

function App() {
  const [code, setCode] = useState('// Start coding...');
  const [files, setFiles] = useState({});
  const [selectedFile, setSelectedFile] = useState('main.js');
  const [users, setUsers] = useState([]);
  const editorRef = useRef(null);

  const { sendMessage, lastMessage } = useWebSocket(WS_URL, {
    onOpen: () => {
      console.log('WebSocket connection established.');
    },
    onMessage: (event) => {
      if (event.data instanceof Blob) {
        const reader = new FileReader();
        reader.onload = () => {
          try {
            const message = JSON.parse(reader.result);
            handleMessage(message);
          } catch (error) {
            console.error('Error parsing JSON:', error);
          }
        };
        reader.readAsText(event.data);
      } else {
        try {
          const message = JSON.parse(event.data);
          handleMessage(message);
        } catch (error) {
          console.error('Error parsing JSON:', error);
        }
      }
    }
  });

  useEffect(() => {
    if (lastMessage !== null) {
      const message = JSON.parse(lastMessage.data);
      handleMessage(message);
    }
  }, [lastMessage]);

  const handleMessage = (message) => {
    if (message.type === 'code-change' && message.file === selectedFile) {
      setCode(message.content);
    } else if (message.type === 'user-list') {
      setUsers(message.users);
    }
  };

  const onCodeChange = (newCode) => {
    setCode(newCode);
    sendMessage(JSON.stringify({ type: 'code-change', file: selectedFile, content: newCode }));
    // Optionally, save the code to the backend
    saveCodeToBackend(selectedFile, newCode);
  };

  const saveCodeToBackend = async (fileId, content) => {
    const version = 1; // You may want to handle versioning differently
    const userId = 'currentUser'; // Replace with the actual user ID
    try {
      await API.graphql(graphqlOperation(createCodeFile, { fileId, version, userId, content }));
      console.log('Code saved to backend.');
    } catch (error) {
      console.error('Error saving code:', error);
    }
  };

  const createFile = (fileName) => {
    setFiles((prev) => ({ ...prev, [fileName]: '' }));
    setSelectedFile(fileName);
  };

  const selectFile = async (fileName) => {
    setSelectedFile(fileName);
    if (files[fileName]) {
      setCode(files[fileName]);
    } else {
      // Fetch file from backend if not already in local state
      try {
        const result = await API.graphql(graphqlOperation(getCodeFile, { fileId: fileName, version: 1 }));
        const fileContent = result.data.getCodeFile.content;
        setCode(fileContent);
        setFiles((prev) => ({ ...prev, [fileName]: fileContent }));
      } catch (error) {
        console.error('Error fetching file:', error);
      }
    }
  };

  const editorOptions = {
    selectOnLineNumbers: true,
    automaticLayout: true,
  };

  return (
    <div className="app">
      {/* Top Navbar with Users */}
      <div className="navbar">
        <h1>Collaborative Code Editor</h1>
        <div className="users">
          <h3>Users</h3>
          <ul>
            {users.map((user) => (
              <li key={user}>{user}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="main-content">
        {/* File Explorer */}
        <div className="file-explorer">
          <h3>File Explorer</h3>
          <ul>
            {Object.keys(files).map((file) => (
              <li key={file} onClick={() => selectFile(file)} style={{ cursor: 'pointer' }}>
                {file}
              </li>
            ))}
          </ul>
          <button onClick={() => createFile(`newFile${Object.keys(files).length + 1}.js`)}>New File</button>
        </div>

        {/* Code Editor */}
        <div className="editor-container">
          <MonacoEditor
            height="calc(100vh - 150px)" // Adjust height as needed
            language="javascript"
            theme="vs-dark"
            value={code}
            options={editorOptions}
            onChange={onCodeChange}
            editorDidMount={(editor) => { editorRef.current = editor; }}
          />
        </div>
      </div>

      {/* Terminal */}
      <div className="terminal">
        <h3>Terminal</h3>
        <textarea placeholder="Terminal output will appear here..." rows="5"></textarea>
      </div>
      <DrawingCanvas />
    </div>
  );
}

export default App;
