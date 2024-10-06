import React from 'react';
import { Button, ToggleButton, ToggleButtonGroup } from '@mui/material';

function Navigation({ view, setView, setDarkMode }) { // Added 'view' here
  const handleChange = (event, newView) => {
    setView(newView);
  };

  return (
    <div style={{ position: 'absolute', bottom: 0, right: 0, width: '100%' }}>
      <ToggleButtonGroup
        value={view} // Using 'view' prop here
        exclusive
        onChange={handleChange}
        aria-label="view selection"
      >
        <ToggleButton value="chat" aria-label="chat">
          Chat
        </ToggleButton>
        <ToggleButton value="doubt" aria-label="doubt">
          Doubt
        </ToggleButton>
        <ToggleButton value="raise-hand" aria-label="raise-hand">
          Raise Hand
        </ToggleButton>
      </ToggleButtonGroup>

      <Button onClick={() => setDarkMode((prev) => !prev)}>
        Toggle Theme
      </Button>
    </div>
  );
}

export default Navigation;
