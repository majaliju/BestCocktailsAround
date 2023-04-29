import { Link } from 'react-router-dom';

function UserReviewCard({ review }) {
  return (
    <div className='justify-center card w-96 bg-primary text-primary-content'>
      <div key={review.id} className='card-body'>
        <h2 className='card-title'>{review.stars} stars</h2>
        <p>{review.comment}</p>
        <div className='justify-end card-actions'>
          <div>
            <div>
              <Link
                to={`/reviews/${review.id}`}
                state={{ review: review }}
                className='justify-center w-full btn'>
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
        </div>
      </div>
    </div>
  );
}

export default UserReviewCard;
