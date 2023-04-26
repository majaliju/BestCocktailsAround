import { useState, useEffect, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Homepage from './Homepage';
import Login from './Login';
import SignUp from './SignUp';
import { user, UserProvider, UserContext } from '../context/user';
import { Link } from 'react-router-dom';
import UserAddressForm from './UserAddressForm';

function App() {
  // const [user, setUser] = useState({});
  const { user, setUser } = useContext(UserContext);

  // const [bars, setBars] = useState({});

  const [loggedIn, setLoggedIn] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    fetch('/me').then((response) => {
      if (response.ok) {
        response.json().then((response) => {
          console.log('within /me, the response is: ', response);
          setUser(response);
          setLoggedIn(true);
        });
      } else {
        setUser({});
        setLoggedIn(false);
      }
    });
  }, []);

  // useEffect(() => {
  //   fetch('/bars')
  //     .then((r) => r.json())
  //     .then((info) => setBars(info));
  // }, []);

  // console.log('bars : ', bars);
  console.log('user in the App route: ', user);

  function logUserIn(givenUser) {
    setUser(givenUser);
    setLoggedIn(true);
  }

  function logUserOut() {
    setUser({});
    setLoggedIn(false);
  }

  return (
    <div>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Routes>
        <Route
          path='/'
          element={<Homepage loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
        />
        <Route
          path='/addressUpdate'
          element={<UserAddressForm loggedIn={loggedIn} />}
        />
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
