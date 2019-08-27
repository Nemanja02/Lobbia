import React from "react";
import classes from "./Button.module.scss";

function Button(props) {
  return (
    <a
      tabIndex="0"
      href={props.href}
      className={`
        ${props.primary ? classes.primary : null} 
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
