function Homepage({ user }) {
  return (
    <div>
      <h1 className='text-5xl text-secondary'>Welcome back {user.username}!</h1>
      <h1 className='text-5xl text-primary'>search bar & mapkick here</h1>
    </div>
  );
}

export default Homepage;
