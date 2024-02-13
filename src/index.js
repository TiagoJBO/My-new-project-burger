import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyled from "./globalStyled";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
    <GlobalStyled />
  </>
);
