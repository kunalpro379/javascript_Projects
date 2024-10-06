import { useState, useCallback } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const passwordGenerator = useCallback(() => {
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let numbers = '0123456789';
    let specialChar = '!@#$%^&*()_+';
    let pass = '';

    if (numberAllowed) {
      str += numbers;
    }
    if (charAllowed) {
      str += specialChar;
    }

    for (let i = 0; i < length; i++) {
      let charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed,setPassword]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert('Password copied to clipboard!');
  };

  const displayPasword=password.length>12?password.slice(0,9)+'...':password;
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-lg rounded-lg px-6 py-4 my-8 bg-gray-100'>
        <h1 className='text-2xl font-bold text-center mb-4 text-black'>Password Generator</h1>
        <button 
          onClick={passwordGenerator} 
          className='w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'>
          Generate Password
        </button>
        <div className='mt-4 flex items-center justify-center'>
          <div className='relative'>
            <input 
              type='text' 
              value={displayPasword} 
              readOnly 
              className='bg-white text-xl font-semibold border border-gray-300 rounded-full px-4 py-2 shadow-inner text-black'
              style={{ width: '100%', textAlign: 'center' }}
            />
            <button 
              onClick={copyToClipboard} 
              className='absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-transparent border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-colors'>
              Copy
            </button>
          </div>
        </div>
          <div className='flex items-center gap-x-5 mt-4'></div>
        <div className='flex text-sm gap-x-5'>
          <div className='flex items-center gap-x-5'>
            <input type="range"  
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)}
            />

            <label className='text-0.5xl font-bold text-center mb-4 text-black' >length:{length}</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
