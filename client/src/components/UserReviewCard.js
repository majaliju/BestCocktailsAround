import { Link } from 'react-router-dom';
import { BarCocktailsContext } from '../context/barCocktails';
import { UserContext } from '../context/user';
import { useContext, useEffect } from 'react';

function UserReviewCard({ review, handleReviewDelete }) {
  const { user, setUser } = useContext(UserContext);
  const { barCocktails, setBarCocktails } = useContext(BarCocktailsContext);

  const updatedDrink = barCocktails.find(
    (drink) => drink.id === review.bar_cocktail_id
  );

  function handleReviewDelete(review) {
    fetch(`/reviews/${review.id}`, {
      method: 'DELETE',
    }).then(() => {
      // const remainingReviewsForDrink = user.posts.filter(
      //   (eachReview) =>
      //     eachReview.bar_cocktail_id === updatedDrink.id &&
      //     eachReview.id !== review.id
      // );

      // if (remainingReviewsForDrink.length === 0) {
      //   const updatedBarCocktails = user.barCocktails.filter(
      //     (drink) => drink.id !== review.bar_cocktail_id
      //   );
      // }

      //^ update the user.reviews
      const updatedReviews = user.reviews.filter(
        (eachReview) => eachReview.id !== review.id
      );
      setUser({
        ...user,
        reviews: updatedReviews,
      });

      // //^ update the user.barCocktails
      // const

      //^ update the barCocktail.reviews
      const updatedDrinkReviews = updatedDrink.reviews.map((givenReview) => {
        if (givenReview.id !== review.id) {
          return givenReview;
        }
      });
      updatedDrink['reviews'] = updatedDrinkReviews;

      const allOtherDrinks = barCocktails.filter(
        (eachOne) => eachOne.id !== updatedDrink.id
      );
      setBarCocktails([...allOtherDrinks, updatedDrink]);
    });
  }

  // console.log('updatedDrink in URC: ', updatedDrink);
  return (
    <div className='justify-center text-gray-900 card w-96 bg-primary'>
      <div key={review.id} className='card-body'>
        <h1 className='text-2xl italic uppercase'>{review.special_name}</h1>
        <h2 className='justify-center bg-gray-800 text-primary card-title'>
          {review.stars} stars
        </h2>
        <p className='text-tertiary'>{review.comment}</p>
        <div className='justify-end card-actions'>
          <div>
            <div>
              <Link
                to={`/reviews/${review.id}`}
                state={{ review: review, updatedDrink: updatedDrink }}
                className='justify-center w-full btn text-gray-950 bg-primary to-secondary-focus'>
                Edit your review
              </Link>
            </div>
            <div>
              <button
                className='justify-center w-full btn'
                onClick={() => handleReviewDelete(review)}>
                Delete this
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserReviewCard;
