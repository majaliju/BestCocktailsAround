import MapboxMap from './MapboxMap';
import MapboxMapReddit from './MapBoxReddit';
import { useContext } from 'react';
import { user, UserProvider, UserContext } from '../context/user';

function Homepage({ loggedIn }) {
  const { user } = useContext(UserContext);
  console.log('user in HomePage', user);
  return (
    <div>
      {user ? (
        <div>
          <h1>user exists!</h1>
        </div>
      ) : (
        <div>
          <h1>user doesnt exist</h1>
        </div>
      )}
      {user === null ? (
        <div>
          <h1>user equals null</h1>
        </div>
      ) : (
        <div>
          <h1>user does NOT equal null</h1>
        </div>
      )}
      {loggedIn === false ? (
        <div>
          <h1>loggedIn is false</h1>
        </div>
      ) : (
        <div>
          <h1>loggedIn is NOT false (its true)</h1>
        </div>
      )}
      {/* <h1 className='text-5xl text-secondary'>Welcome back {user.username}!</h1> */}
      {/* write a loading condition here
      if MapBoxMap didn't load, render <Loading />
      */}
      <MapboxMap user={user} />
      <h1 className='text-5xl text-primary'>search bar & mapkick here</h1>
    </div>
  );
}

export default Homepage;
