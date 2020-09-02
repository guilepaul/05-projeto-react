import React from "react";

import GlobalDStyle from "./styles/global";
import Routes from "./routes";

import { BrowserRouter } from "react-router-dom";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalDStyle />
    </>
  );
};

export default App;
