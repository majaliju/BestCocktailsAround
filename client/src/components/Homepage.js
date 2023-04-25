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
          <MapboxMap />
        </div>
      ) : (
        <Link to='/login' replace={true}>
          <button className='gap-2 btn'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
              />
            </svg>
            Click here to log in!
          </button>
        </Link>
      )}

      {/* write a loading condition here
      if MapBoxMap didn't load, render <Loading />
      */}
    </div>
  );
}

export default Homepage;
