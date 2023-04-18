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

  // to make it run
  const REACT_APP_MAPBOX_ACCESS_TOKEN =
    'pk.eyJ1IjoibWFqYWxpanUiLCJhIjoiY2xnbXcyeHA3MDU0dDNkcGhuZGU3dDd6YSJ9.2zxCLGMyqkHna0ePuWpxuw';

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
