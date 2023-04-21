import { useState, useEffect, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Homepage from './Homepage';
import Login from './Login';
import SignUp from './SignUp';
import { user, UserProvider, UserContext } from '../context/user';

function App() {
  // const [user, setUser] = useState({});
  const { setUser } = useContext(UserContext);
  const [loggedIn, setLoggedIn] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);

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

  console.log('user in the App route: ', user);

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
      <UserProvider>
        <Header user={user} loggedIn={loggedIn} onLogout={onLogout} />
        <Routes>
          <Route path='/' element={<Homepage user={user} />} />
          <Route path='/theBestList' element={<TheBestRankings />} />
          <Route path='/bars' element={<BarsDisplay />}>
            <Route path=':id' element={<EachBarPage />} />
          </Route>
          <Route path='/cocktails' element={<CocktailsDisplay />}>
            <Route path=':id' element={<EachBarPage />} />
          </Route>
          <Route path='/login' element={<Login onLogin={onLogin} />} />
          <Route path='/signup' element={<SignUp onLogin={onLogin} />} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
