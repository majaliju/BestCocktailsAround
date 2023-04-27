import { useParams, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import Loading from './Loading';
import EachBarCocktailCard from './EachBarCocktailCard';
import { barCocktails, BarCocktailsContext } from '../context/barCocktails';

function EachBarPage({}) {
  const { id } = useParams();
  const location = useLocation();
  const { barCocktails } = useContext(BarCocktailsContext);

  let bar = location.state.bar;
  console.log('bar in eachbarpage: ', bar);

  const thisBarsCocktails = barCocktails.filter(
    (eachDrink) => eachDrink.bar_id === bar.id
  );
  console.log('thisBarsCocktails: ', thisBarsCocktails);

  return (
    <div>
      <div className='py-6 bg-base-900 sm:py-8 lg:py-'>{bar.name}</div>
      {thisBarsCocktails.map((barCocktail) => (
        <EachBarCocktailCard barCocktail={barCocktail} />
      ))}
    </div>
  );
}

export default EachBarPage;
