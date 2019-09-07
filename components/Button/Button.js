import React from "react";
import classes from "./Button.module.scss";

function Button(props) {
  return (
    <a
      onClick={props.click}
      tabIndex="0"
      href={props.href}
      className={` 
        ${classes.button} 
        ${props.class}
      `}
      style={props.style}
    >
      {props.children}
    </a>
  );
}

export default Button;
