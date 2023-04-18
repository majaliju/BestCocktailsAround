import React from 'react';
import ReactMapGL from 'react-map-gl';
import { useState } from 'react';

export default function App() {
  const [viewport, setViewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    width: '100vw',
    height: '100vh',
    zoom: 10,
  });

  console.log('what');

  return (
    <div>
      <ReactMapGL {...viewport} mapboxApiAccessToken={REACT_APP_MAPBOX_TOKEN}>
        markers here
      </ReactMapGL>
    </div>
  );
}
