import { useParams } from 'react-router-dom';

function EachBarPage({ bar }) {
  const { id } = useParams();
  console.log('id: ', id);

  console.log('bar within EBC: ', bar);

  return (
    <div>
      <h1>{bar.name}</h1>
    </div>
  );
}

export default EachBarPage;
