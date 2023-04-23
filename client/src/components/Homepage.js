import MapboxMap from './MapboxMap';
import MapboxMapReddit from './MapBoxReddit';
import { useContext } from 'react';
import { user, UserProvider, UserContext } from '../context/user';
import { Link, Navigate } from 'react-router-dom';

function Homepage({ loggedIn }) {
  const { user } = useContext(UserContext);
  console.log('user in HomePage', user);
  return (
    <div>
      {loggedIn === true ? (
        <div>
          <h1>loggedIn is NOT false (its true)</h1>
          <h1 className='text-4xl text-secondary'>
            Welcome back {user.username}!
          </h1>
          <MapboxMap user={user} />
        </div>
      ) : (
        <Navigate to='/login' replace={true} />
      )}

      {/* write a loading condition here
      if MapBoxMap didn't load, render <Loading />
      */}
    </div>
  );
}

export default Homepage;
