import React from 'react';
import ReactDOM from 'react-dom';
import TodoContextProvider from './contexts/TodoContext';
import Routes from './routes';

import './styles/global.css';

ReactDOM.render(
  <React.StrictMode>
    <TodoContextProvider>
      <Routes />
    </TodoContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);