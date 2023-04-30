import { useLocation, Link } from 'react-router-dom';
import { user, UserContext } from '../context/user';
import { barCocktails, BarCocktailsContext } from '../context/barCocktails';
import { useContext, useState } from 'react';

function EachCocktailPage() {
  const location = useLocation();
  let barCocktail = location.state.barCocktail;

  const { user } = useContext(UserContext);
  const { barCocktails } = useContext(BarCocktailsContext);

  const [updatedDrink, setUpdatedDrink] = useState(barCocktail);

  // console.log('updatedDrink in EBCP: ', updatedDrink);

  //^ the original
  const barCocktailReviews = barCocktail.reviews;

  function handleDelete(review) {
    fetch(`/reviews/${review.id}`, {
      method: 'DELETE',
    }).then(() => {
      console.log('DELETE works!');
    });
  }

  // function handleReviewDelete(review) {
  //   fetch(`/reviews/${review.id}`, {
  //     method: 'DELETE',
  //   }).then(() => {
  //     const updatedReviews = user.reviews.filter(
  //       (eachReview) => eachReview.id !== review.id
  //     );
  //     setUser({
  //       ...user,
  //       reviews: updatedReviews,
  //     });
  //   });
  // }

  return (
    <div>
      <div class='mb-10 md:mb-16'>
        <h1 class='mb-4 text-center text-5xl font-thin uppercase text-primary md:mb-6 lg:text-6xl'>
          {barCocktail.special_name}
        </h1>

        <div className='flex justify-center w-full input-group input-group-lg'>
          <Link to={'/reviews'} state={{ barCocktail: barCocktail }}>
            <button className='btn btn-secondary btn-outline'>
              Submit a Review!
            </button>
          </Link>
        </div>
      </div>
      <div class='grid justify-center gap-8 mx-6 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 '>
        {barCocktailReviews.length === 0 ? (
          <div>No reviews here yet! Be the first one!</div>
        ) : (
          barCocktailReviews.map((review) => (
            <div className='justify-center card w-96 bg-primary text-primary-content'>
              <div key={review.id} className='card-body'>
                <h2 className='card-title'>{review.stars} stars</h2>
                <p>{review.comment}</p>
                <div className='justify-end card-actions'>
                  {parseInt(review.user_id) === parseInt(user.id) ? (
                    <div>
                      <div>
                        <Link
                          to={`/reviews/${review.id}`}
                          state={{ review: review, updatedDrink: updatedDrink }}
                          className='justify-center w-full btn '>
                          Edit this Review
                        </Link>
                      </div>
                      <div>
                        <btn
                          className='justify-center w-full btn'
                          onClick={() => console.log('in EBCP, delete button')}>
                          delete button
                        </btn>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <btn className='btn'>not the og user</btn>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default EachCocktailPage;
