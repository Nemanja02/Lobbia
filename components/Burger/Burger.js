import React from "react";
import classes from "./Burger.module.scss";

function Burger({ clicked }) {
  return (
    <div onClick={clicked} tabIndex="0" className={classes.burger}>
      <div />
      <div />
      <div />
    </div>
  );
}

export default Burger;
