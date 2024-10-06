import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <button
        className="p-4 m-4 text-white bg-blue-500 rounded"
        onClick={() => setColor("purple")}
      >
        Change to Purple
      </button>
    
    
    </div>
  );
}

export default App;
