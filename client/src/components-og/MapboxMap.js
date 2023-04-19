import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { useState, useRef, useEffect } from 'react';

mapboxgl.accessToken =
  'pk.eyJ1IjoibWFqYWxpanUiLCJhIjoiY2xnbXcyeHA3MDU0dDNkcGhuZGU3dDd6YSJ9.2zxCLGMyqkHna0ePuWpxuw';

function MapboxMap({ user }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lat, setLat] = useState(42.35);
  const [lng, setLng] = useState(-70.9);
  const [zoom, setZoom] = useState(9);

  console.log('user within MapBox', user);
  console.log('lat: ', lat);
  console.log('lng: ', lng);

  useEffect(() => {
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom,
    });
  }, []);

  return (
    <div>
      <div ref={mapContainer} className='map-container' />
    </div>
  );
}

export default MapboxMap;
