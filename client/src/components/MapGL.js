import * as React from 'react';
import { Map, Marker, Popup } from 'react-map-gl';
import { useContext, useState, useMemo, useEffect } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import Pin from './Pin';

import { UserContext } from '../context/user';
import { BarsContext } from '../context/bars';
import { AddressSubmittedContext } from '../context/addressSubmitted';

const MAPBOX_TOKEN =
  'pk.eyJ1IjoibWFqYWxpanUiLCJhIjoiY2xnbXZ5MjR4MDl3cDNzcWFvN3Nsc3F0aSJ9.eDrOKKxTWcKvQfdCuDIiFA';
// Set your mapbox token here

export default function MapGL({}) {
  const { user } = useContext(UserContext);
  const { bars } = useContext(BarsContext);
  const { addressSubmitted } = useContext(AddressSubmittedContext);

  const [popupInfo, setPopupInfo] = useState(null);

  const pins = useMemo(
    () =>
      bars.map((bar, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={bar.longitude}
          latitude={bar.latitude}
          anchor='bottom'
          onClick={(e) => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation();
            setPopupInfo(bar);
          }}>
          {console.log('bar: ', bar)}
          <Pin />
        </Marker>
      )),
    []
  );
  console.log('popupInfo: ', popupInfo);
  return (
    <Map
      initialViewState={{
        longitude: user.longitude,
        latitude: user.latitude,
        zoom: 10,
      }}
      style={{ width: 1000, height: 800 }}
      mapStyle='mapbox://styles/mapbox/dark-v11'
      mapboxAccessToken={MAPBOX_TOKEN}>
      <Marker longitude={user.longitude} latitude={user.latitude} color='red' />
      {pins}

      {popupInfo && (
        <Popup
          anchor='top'
          longitude={Number(popupInfo.longitude)}
          latitude={Number(popupInfo.latitude)}
          onClose={() => setPopupInfo(null)}>
          <div>
            {popupInfo.bar.name} | {popupInfo.bar.address}
          </div>
        </Popup>
      )}
    </Map>
  );
}
