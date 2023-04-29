import { useLocation } from 'react-router-dom';

function EditReviewForm() {
  const location = useLocation();
  let review = location.state.review;

  console.log('review within editform: ', review);
  return <div></div>;
}

export default EditReviewForm;
