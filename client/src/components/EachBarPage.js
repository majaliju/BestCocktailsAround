import { useParams, useLocation } from 'react-router-dom';
import Loading from './Loading';

function EachBarPage({}) {
  const { id } = useParams();
  const location = useLocation();

  let bar = location.state.bar;
  console.log('bar within EACHBARPAGE: ', bar);
  console.log('id within EBC: ', id);

  return (
    <div>
      <div className='py-6 bg-base-900 sm:py-8 lg:py-'>
        {bar ? (
          <div>
            <div key={bar.id} className='max-w-screen-xl px-4 mx-auto md:px-8'>
              <div className='mb-10 md:mb-16'>
                <h1 className='mb-4 text-6xl font-thin text-center uppercase text-primary md:mb-6 lg:text-7xl'>
                  {bar.name}
                </h1>
              </div>
            </div>
          </div>
        ) : (
          <Loading />
        )}
        <div>
          {bar.cocktails.map((eachDrink) => {
            <div className='card w-96 bg-neutral text-neutral-content'>
              <div className='items-center text-center card-body'>
                <h2 className='card-title'>Cookies!</h2>
                <p>We are using cookies for no reason.</p>
                <div className='justify-end card-actions'>
                  <button className='btn btn-primary'>Accept</button>
                  <button className='btn btn-ghost'>Deny</button>
                </div>
              </div>
            </div>;
          })}
        </div>
      </div>
    </div>
  );
}

export default EachBarPage;
