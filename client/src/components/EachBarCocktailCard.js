import { barCocktails, BarCocktailsContext } from '../context/barCocktails';
import Loading from './Loading';
import { useNavigate } from 'react-router-dom';

function EachBarCocktailCard({ barCocktail }) {
  const navigate = useNavigate();

  return (
    <div>
      <div className='py-6 bg-base-900 sm:py-8 lg:py-'>
        {barCocktail !== undefined ? (
          <div className='shadow-xl card w-96 bg-base-100'>
            <figure className='px-10 pt-10'>
              <img
                src={barCocktail.cocktail.image}
                alt='Shoes'
                className='rounded-xl'
              />
            </figure>
            <div className='items-center text-center card-body'>
              <h2 className='card-title'>{barCocktail.special_name}</h2>
              <p></p>
              <div className='card-actions'>
                <button className='btn btn-primary'>Show Reviews</button>
              </div>
            </div>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}

export default EachBarCocktailCard;
