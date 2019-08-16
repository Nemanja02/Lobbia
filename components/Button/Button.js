import React from "react";
import classes from "./Button.module.scss";

function Button({ clicked, title }) {
  return <button onClick={clicked}>{title}</button>;
}

export default Button;
