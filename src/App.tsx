import React from "react";
import { GlobalStyle } from "./GlobalStyle";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Router />
    </BrowserRouter>
  );
};

export default App;
