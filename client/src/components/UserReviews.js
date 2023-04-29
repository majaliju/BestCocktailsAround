import { useContext, useEffect } from 'react';
import { user, UserContext } from '../context/user';
import { LoggedInContext, loggedIn } from '../context/loggedIn';
import Loading from './Loading';
import UserReviewCard from './UserReviewCard';

function UserReviews({}) {
  const { user, setUser } = useContext(UserContext);
  const { loggedIn } = useContext(LoggedInContext);

  const userReviews = user.reviews;

  return (
    <div className='py-6 bg-base-900 sm:py-8 lg:py-12'>
      <div>
        {loggedIn === true ? (
          <div className='max-w-screen-xl px-4 mx-auto md:px-8'>
            <div className='mb-10 md:mb-16'></div>
            <h1 className='mb-4 text-6xl font-thin text-center text-primary md:mb-6 lg:text-7xl'>
              {user.username}'s drink reviews
            </h1>
            {loggedIn === true ? (
              <div className='grid gap-8 mx-6 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 '>
                {user.reviews.map((review) => (
                  <UserReviewCard review={review} />
                ))}
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default UserReviews;
