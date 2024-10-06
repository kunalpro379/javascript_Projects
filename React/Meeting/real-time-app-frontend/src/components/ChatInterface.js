import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Paper } from '@mui/material';

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim() !== '') {
      setMessages([...messages, { text: input, sender: 'User' }]);
      setInput('');
    }
  };

  return (
    <Paper
      sx={{
        padding: 2,
        marginTop: 2,
        backgroundColor: '#f0f0f0',
        minHeight: '300px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{ overflowY: 'auto', maxHeight: '200px', mb: 2 }}>
        {messages.map((msg, index) => (
          <Typography key={index} variant="body1" sx={{ mb: 1 }}>
            <strong>{msg.sender}: </strong> {msg.text}
          </Typography>
        ))}
      </Box>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <TextField
          variant="outlined"
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button variant="contained" onClick={handleSendMessage}>
          Send
        </Button>
      </Box>
    </Paper>
  );
};

export default ChatInterface;
