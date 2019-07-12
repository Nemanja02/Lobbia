import React from "react";
import classes from "./Typography.module.scss";

function Typography({ clicked, active, variant, children, color }) {
  switch (variant) {
    case "h1":
      return <h1 className={`${classes.h1} ${classes[color]}`}>{children}</h1>;
    case "h2":
      return <h2 className={`${classes.h2} ${classes[color]}`}>{children}</h2>;
    case "h3":
      return <h3 className={`${classes.h3} ${classes[color]}`}>{children}</h3>;
    case "h4":
      return <h4 className={`${classes.h4} ${classes[color]}`}>{children}</h4>;
    case "h5":
      return <h5 className={`${classes.h5} ${classes[color]}`}>{children}</h5>;
    case "h6":
      return <h6 className={`${classes.h6} ${classes[color]}`}>{children}</h6>;
    case "span":
      return (
        <span className={`${classes.span} ${classes[color]}`}>{children}</span>
      );
    case "nav-title":
      return (
        <span
          onClick={clicked}
          className={`${classes["nav-title"]} ${classes[color]} ${
            active === true ? classes["tab-control-child-active"] : null
          } `}
        >
          {children} 
        </span>
      );
    default:
      return <span className={`${classes.p} ${classes[color]}`}>{children}</span>;
  }
}

export default Typography;
