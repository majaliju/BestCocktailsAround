import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import 'mapbox-gl/dist/mapbox-gl.css';

import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './context/user';
import { BarsProvider } from './context/bars';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <UserProvider>
      <BarsProvider>
        <App />
      </BarsProvider>
    </UserProvider>
  </BrowserRouter>
);
