import { useLocation, Link } from 'react-router-dom';
import { user, UserContext } from '../context/user';
import { barCocktails, BarCocktailsContext } from '../context/barCocktails';
import { useContext } from 'react';

function EachCocktailPage() {
  const location = useLocation();
  let barCocktail = location.state.barCocktail;
  const { user } = useContext(UserContext);
  const { barCocktails } = useContext(BarCocktailsContext);

  // the state based adjustment
  // const thisDrink = barCocktails.find((each) => each.id === barCocktail.id);
  // const barCocktailReviews = barCocktail.reviews;

  //^ the original
  const barCocktailReviews = barCocktail.reviews;

  function handleDelete(review) {
    fetch(`/reviews/${review.id}`, {
      method: 'DELETE',
    }).then(() => {
      console.log('DELETE works!');
    });
  }

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
          barCocktailReviews.map((eachReview) => (
            <div className='justify-center card w-96 bg-primary text-primary-content'>
              <div key={eachReview.id} className='card-body'>
                <h2 className='card-title'>{eachReview.stars} stars</h2>
                <p>{eachReview.comment}</p>
                <div className='justify-end card-actions'>
                  {parseInt(eachReview.user_id) === parseInt(user.id) ? (
                    <div>
                      <div>
                        <Link
                          to={`/reviews/${eachReview.id}`}
                          state={{ review: eachReview }}
                          className='justify-center w-full btn '>
                          Edit this Review
                        </Link>
                      </div>
                      <div>
                        <btn
                          className='justify-center w-full btn'
                          onClick={() => console.log('delete button works')}>
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
