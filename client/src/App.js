import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

export default function App() {
  const [viewport, setViewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    width: '100vw',
    height: '100vh',
    zoom: 10,
  });

  console.log('REACT_APP_MAPBOX_ACCESS_TOKEN: ', REACT_APP_MAPBOX_ACCESS_TOKEN);

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxAccessToken={REACT_APP_MAPBOX_ACCESS_TOKEN}>
        markers here
      </ReactMapGL>
    </div>
  );
}