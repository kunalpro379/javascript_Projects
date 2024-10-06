import React from 'react';
import { Box, IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const Sidebar = ({ onToggleTheme, onSelectSection, theme }) => {
  return (
    <Box
      sx={{
        position: 'fixed',
        right: 0,
        top: 0,
        height: '100%',
        width: 60,
        backgroundColor: theme === 'dark' ? '#333' : '#eee',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 2,
      }}
    >
      <IconButton color="inherit" onClick={() => onSelectSection('chat')}>
        <ChatIcon />
      </IconButton>
      <IconButton color="inherit" onClick={() => onSelectSection('doubt')}>
        <QuestionAnswerIcon />
      </IconButton>
      <IconButton color="inherit" onClick={onToggleTheme}>
        {theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  );
};

export default Sidebar;
