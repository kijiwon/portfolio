import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './style/GlobalStyle';
import App from './App';

const root = ReactDOM.createRoot(
  // eslint-disable-next-line no-undef
  document.getElementById('root') as HTMLElement,
);
root.render(
  <>
    <GlobalStyle />
    <App />
  </>,
);
