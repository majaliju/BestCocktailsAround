import { Link } from 'react-router-dom';

function UserReviewCard({ review, handleReviewDelete }) {
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
                state={{ review: review }}
                className='justify-center w-full btn text-gray-950 bg-primary to-secondary-focus'>
                Edit your review
              </Link>
            </div>
            <div>
              <btn
                className='justify-center w-full btn'
                onClick={() => handleReviewDelete(review)}>
                Delete this
              </btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserReviewCard;
