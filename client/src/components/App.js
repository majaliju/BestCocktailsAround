import { useState, useEffect, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Homepage from './Homepage';
import Login from './Login';
import SignUp from './SignUp';
import BarsDisplay from './BarsDisplay';
import BarCocktailsDisplay from './BarCocktailsDisplay';
import EachBarPage from './EachBarPage';
import EachBarCocktailPage from './EachBarCocktailPage';
import SubmitReviewForm from './SubmitReviewForm';
import EditReviewForm from './EditReviewForm';
import TheBestRankings from './TheBestRankings';
import { user, UserContext } from '../context/user';
import { LoggedInContext, loggedIn } from '../context/loggedIn';
import { bars, BarsContext } from '../context/bars';
import { Link } from 'react-router-dom';
import UserAddressForm from './UserAddressForm';
import UserReviews from './UserReviews';
import {
  addressSubmitted,
  AddressSubmittedContext,
} from '../context/addressSubmitted';

function App() {
  const { user, setUser } = useContext(UserContext);
  const { loggedIn, setLoggedIn } = useContext(LoggedInContext);
  const { addressSubmitted, setAddressSubmitted } = useContext(
    AddressSubmittedContext
  );
  const { bars } = useContext(BarsContext);

  console.log('user: ', user);
  console.log('addressSubmitted: ', addressSubmitted);
  const [mapLoaded, setMapLoaded] = useState(false);

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('/me').then((response) => {
      if (response.ok) {
        response.json().then((response) => {
          console.log('within /me, the response is: ', response);
          setUser(response);
          setLoggedIn(true);
          if (user.latitude !== null) {
            setAddressSubmitted(true);
          }
        });
      } else {
        setUser({});
        setLoggedIn(false);
      }
    });
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/addressUpdate' element={<UserAddressForm />} />
        <Route path='/yourReviews' element={<UserReviews />} />
        {/* <Route path='/theBestList' element={<TheBestRankings />} /> */}
        <Route
          path='/bars'
          element={
            <BarsDisplay
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          }
        />
        <Route path='/bars/:id' element={<EachBarPage />} />

        <Route
          path='/bar_cocktails'
          element={
            <BarCocktailsDisplay
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          }
        />
        <Route path='/bar_cocktails/:id' element={<EachBarCocktailPage />} />

        <Route path='/reviews' element={<SubmitReviewForm />} />
        <Route path='/reviews/:id' element={<EditReviewForm />} />

        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
