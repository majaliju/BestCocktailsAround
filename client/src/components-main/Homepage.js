import MapboxMap from './MapboxMap';
import MapboxMapReddit from './MapBoxReddit';

function Homepage({ user }) {
  return (
    <div>
      <h1 className='text-5xl text-secondary'>Welcome back {user.username}!</h1>
      {/* write a loading condition here
      if MapBoxMap didn't load, render <Loading />
      */}
      <MapboxMap user={user} />
      <h1 className='text-5xl text-primary'>search bar & mapkick here</h1>
    </div>
  );
}

export default Homepage;
