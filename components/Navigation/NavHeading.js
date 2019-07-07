import React from "react";
import classes from "./NavHeading.module.scss";

function NavHeading({ title }) {
  return <span className={classes.navHeading}>{title.toUpperCase()}</span>;
}

export default NavHeading;
