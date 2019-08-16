import React from "react";
import classes from "./Burger.module.scss";

function Burger({ clicked, state }) {
  return (
    <div onClick={clicked} tabIndex="0" className={`${classes.burger} ${(state)? classes.active : null}`}>
      <div />
      <div />
      <div />
    </div>
  );
}

export default Burger;
