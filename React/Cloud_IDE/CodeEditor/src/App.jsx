import React from 'react';
import EditorLayout from './componants/code_editor';
import './App.css';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple Text Editor</h1>
      </header>
      <EditorLayout />
    </div>
  );
}

export default App;