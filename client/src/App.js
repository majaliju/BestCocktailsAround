import { useState, useEffect } from 'react';

function App() {
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   fetch('/hello')
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);

  useEffect(() => {
    fetch('/me').then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          console.log('within /me, the response is: ', user);
          // onLogin(user);
        });
      } else {
        console.log('the response failed');
        // onLogout();
      }
    });
  }, []);

  return (
    <div className='App'>
      <h1 className='text-5xl text-cyan-600'>Page Count: {count}</h1>
      <h1 className='text-3xl font-bold bg-cyan-400'>Hello world!</h1>
    </div>
  );
}

export default App;
