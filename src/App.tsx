import React from 'react';
import { GlobalStyle } from './GlobalStyle';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import Modal from 'modules/Modals';
import Header from 'modules/Header';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Modal />
      <Router />
    </BrowserRouter>
  );
};

export default App;
