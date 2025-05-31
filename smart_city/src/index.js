// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Обратите внимание: импортируем из 'react-dom/client'
import App from './App';
import './styles.css';

const container = document.getElementById('root');

// Создаём корень с помощью createRoot
const root = ReactDOM.createRoot(container);

// Рендерим наше приложение
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
