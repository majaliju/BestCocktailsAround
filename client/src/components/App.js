import { useState, useEffect, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Homepage from './Homepage';
import Login from './Login';
import SignUp from './SignUp';
import { user, UserProvider, UserContext } from '../context/user';

function App() {
  // const [user, setUser] = useState({});
  const { user, setUser } = useContext(UserContext);
  const [loggedIn, setLoggedIn] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);

  //! this useEffect now is moved basically to the context/user.jsx, where it is validated there instead
  useEffect(() => {
    fetch('/me').then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          console.log('within /me, the response is: ', user);
          setUser(user);
          setLoggedIn(true);
        });
      } else {
        setUser({});
        setLoggedIn(false);
      }
    });
  }, []);

  console.log('user in the App route: ', user);

  // //^ both for logging user in & updating values of LoggedIn & currentUser
  // function onLogin(user) {
  //   setUser(user);
  //   setLoggedIn(true);
  // }

  // //^ to log the user out & also & updating values of LoggedIn & currentUser
  // function onLogout() {
  //   setUser({});
  //   setLoggedIn(false);
  // }

  return (
    <div>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Routes>
        <Route path='/' element={<Homepage loggedIn={loggedIn} />} />
        {/* <Route path='/theBestList' element={<TheBestRankings />} />
          <Route path='/bars' element={<BarsDisplay />}>
            <Route path=':id' element={<EachBarPage />} />
          </Route>
          <Route path='/cocktails' element={<CocktailsDisplay />}>
            <Route path=':id' element={<EachBarPage />} />
          </Route> */}
        <Route path='/login' element={<Login setLoggedIn={setLoggedIn} />} />
        <Route path='/signup' element={<SignUp setLoggedIn={setLoggedIn} />} />
      </Routes>
    </div>
  );
}

export default App;
