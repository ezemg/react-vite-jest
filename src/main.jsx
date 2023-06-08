import React from 'react';
import ReactDOM from 'react-dom/client';
// import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp.jsx';

import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterApp value={20} />
    {/* <FirstApp title="Hola, soy Ezequiel" /> */}
  </React.StrictMode>
);
