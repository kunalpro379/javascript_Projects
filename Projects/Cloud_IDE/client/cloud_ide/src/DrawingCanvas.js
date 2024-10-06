// DrawingCanvas.js
import React, { useRef, useState, useEffect } from 'react';
import useWebSocket from 'react-use-websocket';
import './DrawingCanvas.css';

const WS_URL = 'ws://127.0.0.1:8000';

const DrawingCanvas = ({ onDrawingUpdate }) => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const { sendMessage, lastMessage } = useWebSocket(WS_URL, {
    onMessage: (event) => {
      if (event.data instanceof Blob) {
        const reader = new FileReader();
        reader.onload = () => {
          try {
            const message = JSON.parse(reader.result);
            if (message.type === 'drawing-update') {
              drawOnCanvas(message.data);
            }
          } catch (error) {
            console.error('Error parsing JSON:', error);
          }
        };
        reader.readAsText(event.data);
      } else {
        try {
          const message = JSON.parse(event.data);
          if (message.type === 'drawing-update') {
            drawOnCanvas(message.data);
          }
        } catch (error) {
          console.error('Error parsing JSON:', error);
        }
      }
    }
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = 300;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const startDrawing = (e) => {
    setIsDrawing(true);
    draw(e);
  };

  const endDrawing = () => {
    setIsDrawing(false);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
  };

  const draw = (e) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Send drawing data to server
    sendMessage(JSON.stringify({
      type: 'drawing-update',
      data: { x, y, isDrawing }
    }));

    drawOnCanvas({ x, y, isDrawing });
  };

  const drawOnCanvas = ({ x, y, isDrawing }) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (isDrawing) {
      ctx.lineWidth = 5;
      ctx.lineCap = 'round';
      ctx.strokeStyle = 'black';

      ctx.lineTo(x, y);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x, y);
    } else {
      ctx.beginPath();
    }
  };

  return (
    <div className="drawing-canvas-container">
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseUp={endDrawing}
        onMouseMove={draw}
      />
    </div>
  );
};

export default DrawingCanvas;
