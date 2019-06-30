import React from "react";
import classes from "./Button.module.scss";

function Button({ clicked, title }) {
  return <button onClick={clicked}>{title}</button>;
}

// clicked je funkcija koju passujes u komponenti gde napises <Button/>
export default Button;
