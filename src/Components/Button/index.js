import React from "react";
import { Button } from "./styles";

function conpButton({ children,...props }) {
  
  return (
    <Button {...props} >
      {children}
    </Button>
  );
}
export default conpButton;
