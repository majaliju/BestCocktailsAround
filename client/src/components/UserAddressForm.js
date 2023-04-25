// code came from this mapbox direct tutorial
// https://docs.mapbox.com/mapbox-search-js/example/autofill-checkout-react/

import React, { useState, useCallback, useEffect, useContext } from 'react';
import { AddressAutofill } from '@mapbox/search-js-react';
import { user, UserProvider, UserContext } from '../context/user';
import { useNavigate } from 'react-router-dom';

export default function UserAddressForm() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [postcode, setPostcode] = useState('');

  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [errorsExist, setErrorsExist] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  console.log('street in this component: ', street);

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/users/${user.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        street,
        city,
        state,
        country,
        postcode,
      }),
    }).then((response) => {
      if (response.status >= 200 && response.status <= 299) {
        response.json().then((info) => {
          console.log('response info in /login submit: ', info);
          // setUser(info);
          // setLoggedIn(true);
          setError('');
          setErrorsExist(false);
          setSuccess('success!');
          setSubmitted(true);
          navigate('/');
        });
      } else {
        response.json().then((e) => {
          console.log('e: ', e);
          setErrorsExist(true);
          setError(e.error);
        });
      }
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='p-8 mt-2 mb-0 space-y-4 rounded-lg shadow-2xl'>
      <AddressAutofill accessToken='pk.eyJ1IjoibWFqYWxpanUiLCJhIjoiY2xnbXZ5MjR4MDl3cDNzcWFvN3Nsc3F0aSJ9.eDrOKKxTWcKvQfdCuDIiFA'>
        <div className='w-full max-w-xs form-control'>
          <label className='label'>
            <span className='label-text'>Type in a street...</span>
            <span className='label-text-alt'>Street</span>
          </label>
          <input
            name='street'
            placeholder='Street'
            type='text'
            onChange={(e) => setStreet(e.target.value)}
            autoComplete='address-line1'
            className='w-full max-w-xs input input-bordered'
          />
        </div>
      </AddressAutofill>

      <div className='w-full max-w-xs form-control'>
        <label className='label'>
          <span className='label-text'>Enter your state</span>
          <span className='label-text-alt'>State</span>
        </label>
        <input
          name='state'
          placeholder='State'
          type='text'
          onChange={(e) => setState(e.target.value)}
          autoComplete='address-level1'
          className='w-full max-w-xs input input-bordered'
        />
      </div>

      <div className='w-full max-w-xs form-control'>
        <label className='label'>
          <span className='label-text'>Enter your city</span>
          <span className='label-text-alt'>City</span>
        </label>
        <input
          name='city'
          placeholder='City'
          type='text'
          onChange={(e) => setCity(e.target.value)}
          autoComplete='address-level2'
          className='w-full max-w-xs input input-bordered'
        />
      </div>

      <div className='w-full max-w-xs form-control'>
        <label className='label'>
          <span className='label-text'>Enter your country</span>
          <span className='label-text-alt'>Country</span>
        </label>
        <input
          name='country'
          placeholder='Country'
          type='text'
          onChange={(e) => setCountry(e.target.value)}
          autoComplete='country'
          className='w-full max-w-xs input input-bordered'
        />
      </div>

      <div className='w-full max-w-xs form-control'>
        <label className='label'>
          <span className='label-text'>Enter your postal/zip code</span>
          <span className='label-text-alt'>Postal Code</span>
        </label>
        <input
          name='postcode'
          placeholder='Postcode'
          type='text'
          onChange={(e) => setPostcode(e.target.value)}
          autoComplete='postal-code'
          className='w-full max-w-xs input input-bordered'
        />
      </div>
      {submitted === false ? (
        street !== '' ? (
          city !== '' ? (
            state !== '' ? (
              postcode !== '' ? (
                country !== '' ? (
                  <div>
                    <div className='mt-6 form-control'>
                      <button className='btn btn-primary'>
                        Submit Address
                      </button>
                    </div>
                  </div>
                ) : null
              ) : null
            ) : null
          ) : null
        ) : null
      ) : (
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
            <span>You're all set!</span>
          </div>
        </div>
      )}
    </form>
  );
}
