// code came from this mapbox direct tutorial
// https://docs.mapbox.com/mapbox-search-js/example/autofill-checkout-react/

import React, { useState, useCallback, useEffect, useContext } from 'react';
import { AddressAutofill } from '@mapbox/search-js-react';
import { user, UserProvider, UserContext } from '../context/user';
import { barCocktails, BarCocktailsContext } from '../context/barCocktails';
import { useNavigate, useParams } from 'react-router-dom';

export default function SubmitReviewForm() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const { barCocktails } = useContext(BarCocktailsContext);

  const { id } = useParams();

  const [comment, setComment] = useState('');
  const [stars, setStars] = useState(1);

  const [success, setSuccess] = useState('');
  const [errorArray, setErrorArray] = useState([]);
  const [error, setError] = useState('');
  const [errorsExist, setErrorsExist] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/reviews/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({}),
    }).then((response) => {
      if (response.status >= 200 && response.status <= 299) {
        response.json().then((info) => {
          setError('');
          setErrorsExist(false);
          setSuccess('success!');
          setSubmitted(true);
          // set timeOut function to navigate after 1 second
          // navigate('/');
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
            LEAVE A REVIEW FOR THIS DRINK
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
                className='block w-full px-5 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg'>
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
