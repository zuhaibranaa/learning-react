import React from "react";
import "../css/button.css";

function Button({ click, text, children }) {
  return <button onClick={click}>{children}</button>;
}

export default Button;
