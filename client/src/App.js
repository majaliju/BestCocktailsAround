import logo from './logo.svg';
import './App.css';

import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch('/hello')
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <div className='App'>
      <h1 className='text-5xl text-cyan-600'>Page Count: {count}</h1>
      <h1 className='text-3xl font-bold bg-cyan-400'>Hello world!</h1>
    </div>
  );
}

export default App;
