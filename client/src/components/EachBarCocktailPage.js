import { useLocation } from 'react-router-dom';

function EachCocktailPage() {
  const location = useLocation();
  let barCocktail = location.state.barCocktail;

  const barCocktailReviews = barCocktail.reviews;

  console.log('barCocktailReviews: ', barCocktailReviews);

  // render each barCocktail
  // render the review of each barCocktail in the reviews section
  //! if barCocktailReviews.length === 0; render <h1>No reviews yet! Feel free to leave one</h1>
  // allow posting a review on any barCocktail
  // do a check if this review matches the user.id --> if so, allow editing and deleting
  return <div></div>;
}

export default EachCocktailPage;
