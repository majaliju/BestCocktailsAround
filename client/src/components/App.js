import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Homepage from './Homepage';

function App() {
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
    <div>
      <Header />
      <Routes>
        <Route element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
