import React from 'react';
import ReactDOM from 'react-dom';
import TodoContextProvider from './contexts/TodoContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Routes from './routes';

import './styles/global.css';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <TodoContextProvider>
        <Routes />
      </TodoContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);