import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyled from "./globalStyled";

//import Home from "./containers/home";
import Orders from "./containers/Orders";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    
    <Orders />
    <GlobalStyled />
  </>
);
