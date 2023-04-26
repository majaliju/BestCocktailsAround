import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { useState, useRef, useEffect, useContext } from 'react';
import { user, UserProvider, UserContext } from '../context/user';

mapboxgl.accessToken =
  'pk.eyJ1IjoibWFqYWxpanUiLCJhIjoiY2xnbXZ5MjR4MDl3cDNzcWFvN3Nsc3F0aSJ9.eDrOKKxTWcKvQfdCuDIiFA';

function MapboxMap({ bars }) {
  const { user } = useContext(UserContext);

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lat, setLat] = useState(user.latitude);
  const [lng, setLng] = useState(user.longitude);
  const [zoom, setZoom] = useState(12);

  console.log('bars within mapbox: ', bars);

  function isEmptyObj(object) {
    return JSON.stringify(object) === '{}';
  }
  let barsAreEmpty = isEmptyObj(bars);
  console.log('barsAreEmpty ?: ', barsAreEmpty);

  // console.log('user within MapBox', user);
  // console.log('user.latitude: ', user.latitude);
  // console.log('user.longitude: ', user.longitude);
  // console.log('lat: ', lat);
  // console.log('lng: ', lng);

  useEffect(() => {
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [lng, lat],
      zoom: zoom,
    });

    // bars.map((eachBar) => {
    //   console.log('eachBar :', eachBar.name);
    //   new mapboxgl.Marker()
    //     .setLngLat([eachBar.latitude, eachBar.longitude])
    //     .addTo(map);
    // });
  }, []);

  return (
    <div>
      <div ref={mapContainer} className='map-container' />
      {barsAreEmpty === false
        ? bars.map((eachBar) => {
            console.log('eachBar :', eachBar.name);
            // new mapboxgl.Marker()
            //   .setLngLat([eachBar.latitude, eachBar.longitude])
            //   .addTo(map);
          })
        : null}
    </div>
  );
}

export default MapboxMap;
