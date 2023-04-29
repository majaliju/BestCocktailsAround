import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import AppLayout from './components/AppLayout';
import 'mapbox-gl/dist/mapbox-gl.css';

import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './context/user';
import { BarsProvider } from './context/bars';
import { BarCocktailsProvider } from './context/barCocktails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <UserProvider>
      <BarsProvider>
        <BarCocktailsProvider>
          <AppLayout />
        </BarCocktailsProvider>
      </BarsProvider>
    </UserProvider>
  </BrowserRouter>
);
