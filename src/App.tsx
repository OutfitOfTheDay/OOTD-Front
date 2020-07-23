import React from 'react';
import { GlobalStyle } from './GlobalStyle';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import Modal from 'modules/Modals';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Modal />
      <Router />
    </BrowserRouter>
  );
};

export default App;
