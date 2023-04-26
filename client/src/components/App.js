import { useState, useEffect, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Homepage from './Homepage';
import Login from './Login';
import SignUp from './SignUp';
import BarsDisplay from './BarsDisplay';
import { user, UserProvider, UserContext } from '../context/user';
import { bars, BarsProvider, BarsContext } from '../context/bars';
import { Link } from 'react-router-dom';
import UserAddressForm from './UserAddressForm';

function App() {
  // const [user, setUser] = useState({});
  const { user, setUser } = useContext(UserContext);
  const { bars } = useContext(BarsContext);

  const [loggedIn, setLoggedIn] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);

  const [searchTerm, setSearchTerm] = useState('');

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

  // function to make bars isn't empty
  // precursor to rendering bars in a map function without any bs
  function isEmptyObj(object) {
    return JSON.stringify(object) === '{}';
  }
  const barsAreEmpty = isEmptyObj(bars);
  console.log('barsAreEmpty ?: ', barsAreEmpty);

  return (
    <div>
      <Header
        barsAreEmpty={barsAreEmpty}
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
      />
      <Routes>
        <Route
          path='/'
          element={<Homepage loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
        />
        <Route
          path='/addressUpdate'
          element={<UserAddressForm loggedIn={loggedIn} />}
        />
        {/* <Route path='/theBestList' element={<TheBestRankings />} /> */}
        <Route
          path='/bars'
          element={
            <BarsDisplay
              barsAreEmpty={barsAreEmpty}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          }>
          {/* <Route path=':id' element={<EachBarPage />} /> */}
        </Route>
        {/* <Route path='/cocktails' element={<CocktailsDisplay               searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}/>}>
          <Route path=':id' element={<EachBarPage />} />
        </Route> */}
        <Route path='/login' element={<Login setLoggedIn={setLoggedIn} />} />
        <Route path='/signup' element={<SignUp setLoggedIn={setLoggedIn} />} />
      </Routes>
    </div>
  );
}

export default App;
