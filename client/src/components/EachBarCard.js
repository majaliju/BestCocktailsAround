import Loading from './Loading';

function EachBarCard({ bar }) {
  return (
    <div>
      <div className='py-6 bg-base-900 sm:py-8 lg:py-'>
        {bar !== undefined ? (
          <div className='max-w-screen-xl px-4 mx-auto md:px-8'>
            <div className='flex justify-center'>
              <div className='justify-center shadow-2xl card w-96 bg-base-500 bg-neutral text-neutral-content'>
                <div className='items-center text-center card-body'>
                  <h2 className='card-title'>{bar.name}</h2>
                </div>
                <div className='justify-end card-actions'>{bar.address}</div>
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

export default EachBarCard;
