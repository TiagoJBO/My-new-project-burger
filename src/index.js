import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyled from "./Style/globalStyled";

import Routes from "./routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Routes />
    <GlobalStyled />
  </>
);
