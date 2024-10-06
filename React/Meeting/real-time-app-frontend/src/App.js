import React, { useState } from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Canvas from './components/canvas';
import VideoSection from './components/VideoSection';
import Navigation from './components/Navigation';
import Chat from './components/chat';
import Doubt from './components/Dobut';

function App() {
  const [view, setView] = useState('chat');
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ display: 'flex', height: '100vh' }}>
        {/* Left Side: Canvas */}
        <div style={{ flex: 2, padding: '10px' }}>
          <Canvas />
        </div>

        {/* Right Side: Video + Navigation */}
        <div style={{ flex: 1, position: 'relative', padding: '10px' }}>
          <VideoSection />

          <Navigation setView={setView} setDarkMode={setDarkMode} />

          {/* Dynamic Content based on selected view */}
          {view === 'chat' && <Chat />}
          {view === 'doubt' && <Doubt />}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
