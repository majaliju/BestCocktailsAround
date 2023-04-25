import MapboxMap from './MapboxMap';
import UserAddressForm from './UserAddressForm';
import { useContext, useEffect } from 'react';
import { user, UserProvider, UserContext } from '../context/user';
import { NavLink, Link, Navigate } from 'react-router-dom';

function Homepage({ loggedIn, setLoggedIn }) {
  const { user } = useContext(UserContext);

  // useEffect(() => {
  //   user && {
  //     setLoggedIn(true)
  //   }
  // }, [])

  return (
    <div>
      {loggedIn === true ? (
        <div>
          <NavLink to='/addressUpdate'>SUBMIT YOUR ADDRESS</NavLink>
          <h1>loggedIn is NOT false (its true)</h1>
          <h1 className='text-4xl text-secondary'>
            Welcome back {user.username}!
          </h1>
          <MapboxMap user={user} />
        </div>
      ) : (
        <NavLink to='/login' replace={true}>
          Click here to log in!
        </NavLink>
      )}

      {/* write a loading condition here
      if MapBoxMap didn't load, render <Loading />
      */}
    </div>
  );
}

export default Homepage;
