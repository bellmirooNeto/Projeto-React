import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Servicos from '../src/Components/Servicos';
import AppCarousel from '../src/Components/AppCarousel';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <AppCarousel />
    <Servicos />
  </React.StrictMode>,
  document.getElementById('root')
);

