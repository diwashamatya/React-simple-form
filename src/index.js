import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Fullform from './components/Fullform';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Fullform></Fullform>
    
  </React.StrictMode>
);


