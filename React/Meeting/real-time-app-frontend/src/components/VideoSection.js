import React from 'react';

function VideoSection() {
  return (
    <div style={{ position: 'absolute', top: 0, right: 0, width: '100%' }}>
      {/* Video Content goes here */}
      <video
        style={{ width: '100%', height: '200px', background: 'black' }}
        controls
      >
        {/* Mock Video */}
      </video>
    </div>
  );
}

export default VideoSection;
