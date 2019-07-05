import React from "react";
import classes from "./Typography.module.scss";

function Typography({ variant, title, color }) {
  switch (variant) {
    case "h1":
      return <h1 className={classes.h1}>{title}</h1>;
    case "h2":
      return <h2 className={classes.h2}>{title}</h2>;
    case "h3":
      return <h3 className={classes.h3}>{title}</h3>;
    case "h4":
      return <h4 className={classes.h4}>{title}</h4>;
    case "h5":
      return <h5 className={classes.h5}>{title}</h5>;
    case "h6":
      return <h6 className={classes.h6}>{title}</h6>;
    case "span":
      return <span className={classes.span}>{title}</span>;
    default:
      return <p className={`${classes.p} ${classes[color]}`}>{title}</p>;
  }
}

export default Typography;
