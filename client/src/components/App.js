import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Homepage from './Homepage';

function App() {
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    fetch('/me').then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          console.log('within /me, the response is: ', user);
          onLogin(user);
        });
      } else {
        onLogout();
      }
    });
  }, []);

  //^ both for logging user in & updating values of LoggedIn & currentUser
  function onLogin(user) {
    setUser(user);
    setLoggedIn(true);
  }

  //^ to log the user out & also & updating values of LoggedIn & currentUser
  function onLogout() {
    setUser({});
    setLoggedIn(false);
  }

  return (
    <div>
      <Header user={user} loggedIn={loggedIn} />
      <Routes>
        <Route element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
