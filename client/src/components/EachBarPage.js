import { useParams, useLocation } from 'react-router-dom';

function EachBarPage({}) {
  const { id } = useParams();
  const location = useLocation();

  let bar = location.state.bar;
  console.log('bar within EBC: ', bar);

  return (
    <div>
      <h1>{bar.name}</h1>
    </div>
  );
}

export default EachBarPage;
