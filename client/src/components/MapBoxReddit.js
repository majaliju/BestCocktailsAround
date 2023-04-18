import { Map } from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { useRef, useEffect, useState } from 'react';

function MapboxMapReddit({ user }) {
  const mapContainer = useRef(null);
  const [loading, setLoading] = useState(true);

  console.log('user within MapBox', user);
  // `user` can be null now
  const { lng, lat } = user || {};

  console.log('lat: ', lat);
  console.log('lng: ', lng);

  useEffect(() => {
    if (lng !== undefined && lat !== undefined) {
      const map = new Map({
        // you shouldn't share this private token, regenerate if possible.
        accessToken:
          'pk.eyJ1IjoibWFqYWxpanUiLCJhIjoiY2xmaDd3Zjk2MDIzaDNxcnhkZWlreG01eCJ9.Rm4z9DrJF16ukrO8qyWIbQ',
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
      });

      map.on('load', () => {
        setLoading(false);
      });

      return () => {
        map.remove();
      };
    }
  }, [lng, lat]);

  return (
    <>
      {loading ? (
        <span>loading...</span>
      ) : (
        <div
          // hide map with CSS, but keep it in DOM so mapbox API can attach to `<div/>`
          // style={loading ? 'display: none;' : undefined}
          ref={mapContainer}
          className='map-container'></div>
      )}
    </>
  );
}

export default MapboxMapReddit;
