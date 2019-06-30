import React from "react";
import classes from "./Link.module.scss";

function Link({ path, title, clicked }) {
  return (
    <a href={path} onClick={clicked}>
      {title}
    </a>
  );
}

export default Link;
