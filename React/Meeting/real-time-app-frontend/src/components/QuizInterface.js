import React from 'react';
import { Box, Typography, Button, Card, CardContent } from '@mui/material';

const QuizInterface = () => {
  return (
    <Box 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: 'background.default',
        color: 'text.primary'
      }}
    >
      {/* Question Card */}
      <Card 
        sx={{
          maxWidth: 600,
          backgroundColor: 'background.paper',
          borderRadius: 2,
          boxShadow: 3,
          mb: 4
        }}
      >
        <CardContent>
          <Typography variant="h5" component="div" sx={{ mb: 2, color: 'primary.main' }}>
            Que-6
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            A block of mass m is attached to one end of a massless spring of spring constant k. 
            The other end of the spring is fixed to a wall. The block can move on a horizontal 
            rough surface. The coefficient of friction between the block and the surface is μ. 
            Then the compression of the spring for which maximum extension of the spring becomes 
            half of maximum compression is
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Button variant="outlined">A) (2mgμ)/k</Button>
            <Button variant="outlined">B) (mgμ)/k</Button>
            <Button variant="outlined">C) (4mgμ)/k</Button>
            <Button variant="outlined">D) None of these</Button>
          </Box>
        </CardContent>
      </Card>

      {/* Footer with Referral Code */}
      <Typography variant="caption" sx={{ color: 'primary.main' }}>
        REFERRAL CODE: KAILASH10
      </Typography>
    </Box>
  );
}

export default QuizInterface;
