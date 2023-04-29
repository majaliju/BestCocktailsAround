import { useLocation, useNavigate } from 'react-router-dom';
import { user, UserProvider, UserContext } from '../context/user';
import { barCocktails, BarCocktailsContext } from '../context/barCocktails';
import { useState, useContext } from 'react';

export default function EditReviewForm() {
  const location = useLocation();
  let review = location.state.review;
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const { barCocktails, setBarCocktails } = useContext(BarCocktailsContext);

  const [comment, setComment] = useState('');
  const [stars, setStars] = useState(1);

  const [success, setSuccess] = useState('');
  const [errorArray, setErrorArray] = useState([]);
  const [error, setError] = useState('');
  const [errorsExist, setErrorsExist] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  console.log('review: ', review);

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/reviews/${review.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        comment: comment,
        stars: stars,
        bar_cocktail_id: review.bar_cocktail_id,
        user_id: review.user_id,
      }),
    }).then((response) => {
      if (response.status >= 200 && response.status <= 299) {
        response.json().then((theUpdatedReview) => {
          console.log('review response: ', theUpdatedReview);

          //& user successfully updated
          const updatedReviews = user.reviews.map((thisReview) => {
            if (thisReview.id === theUpdatedReview.id) {
              return theUpdatedReview;
            } else {
              return thisReview;
            }
          });
          setUser({ ...user, reviews: updatedReviews });

          const thisDrink = barCocktails.find(
            (drink) => theUpdatedReview.bar_cocktail_id === drink.id
          );

          const updatedDrinkReviews = thisDrink.reviews.map((thisReview) => {
            if (thisReview.id === theUpdatedReview.id) {
              return theUpdatedReview;
            } else {
              return thisReview;
            }
          });
          //! somehere here is then where I basically do [...thisDrink, thisDrink.reviews: updatedDrinkReviews]

          // filter all other drinks except thisDrink
          const allOtherDrinks = barCocktails.filter(
            (eachOne) => eachOne.id !== thisDrink.id
          );

          console.log('allOtherDrinks before setting state: ', allOtherDrinks);
          // update barCocktails with (all drinks whhere thisDrink.id !== drink.id) + (thisDrink)
          setBarCocktails((allOtherDrinks) => {
            return [...allOtherDrinks, thisDrink];
          });

          setError('');
          setErrorsExist(false);
          setSuccess('success!');
          setSubmitted(true);
          // set timeOut function to navigate after 1 second
          // navigate('/bar_cocktails');
        });
      } else {
        response.json().then((e) => {
          console.log('e: ', e);
          setErrorsExist(true);
          setErrorArray(e.errors);
        });
      }
    });
  }

  function handleStarsChange(e) {
    if (e.target.value > 5) {
      window.alert('5 is the highest rating!');
      setStars(5);
    }
    if (e.target.value < 1) {
      window.alert('1 is the lowest rating!');
      setStars(1);
    } else if (e.target.value > 0 && e.target.value < 6)
      setStars(e.target.value);
  }

  return (
    <div>
      <div className='max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8'>
        <div className='max-w-lg mx-auto'>
          {success !== '' ? (
            <div className='shadow-lg alert alert-success'>
              <div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='flex-shrink-0 w-6 h-6 stroke-current'
                  fill='none'
                  viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
                <span>{success}</span>
              </div>
            </div>
          ) : null}

          {errorsExist !== false ? (
            <div className='shadow-lg alert alert-warning'>
              <div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='flex-shrink-0 w-6 h-6 stroke-current'
                  fill='none'
                  viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
                  />
                </svg>
                {errorArray.map((eachError) => (
                  <span>{eachError}</span>
                ))}
              </div>
            </div>
          ) : null}

          <h1 className='text-2xl font-bold text-center text-white sm:text-3xl'>
            EDIT YOUR REVIEW FOR THIS DRINK
          </h1>
          <form className='p-8 mt-2 mb-0 space-y-4 rounded-lg shadow-2xl'>
            <div>
              <label class='label'>
                <span class='label-text text-secondary uppercase'>
                  how many stars does this deserve?
                </span>
              </label>
              <input
                type='number'
                id='stars'
                value={stars}
                onChange={(e) => handleStarsChange(e)}
                placeholder='how many tickets?'
                className='w-full max-w-xs input input-bordered'
              />
            </div>

            <div>
              <label class='label'>
                <span class='label-text text-secondary uppercase'>
                  leave a comment
                </span>
              </label>
              <input
                type='text'
                id='comment'
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder='write your message here! price, offers, etc'
                className='w-full max-w-xs input input-bordered'
              />
            </div>
            {submitted === false ? (
              <button
                onClick={handleSubmit}
                type='submit'
                className='justify-center w-full btn btn-primary btn-outline'>
                SUBMIT
              </button>
            ) : (
              <button
                disabled
                type='submit'
                className='block w-full px-5 py-3 text-sm font-medium text-white bg-black rounded-lg'>
                SUBMITTED!
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
