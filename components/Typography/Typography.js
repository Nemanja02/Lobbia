import React from "react";
import classes from "./Typography.module.scss";

function Typography({ variant, title }) {
  switch (variant) {
    case "h1":
      return <h1 className={classes.h1}>{title}</h1>;
    case "h2":
      return <h2 className={classes.h2}>{title}</h2>;
    case "h4":
      return <h4 className={classes.h4}>{title}</h4>;
    case "h6":
      return <h6 className={classes.h6}>{title}</h6>;
    default:
      return <p className={classes.p}>{title}</p>;
  }
}

export default Typography;
