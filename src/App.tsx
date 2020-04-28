import React from "react";
import { GlobalStyle } from "./GlobalStyle";
import { BrowserRouter } from "react-router-dom";
import SomeComponent from "../src/components/SomeComponent";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <div>#OOTD</div>
    </BrowserRouter>
  );
};

export default App;
