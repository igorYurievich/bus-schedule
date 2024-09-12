import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  // Подключаем компонент App
import './index.css';     // Подключаем стили, если есть

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
