import React from "react";
import classes from "./Find.module.scss";

function Layout(props) {
  return (
    <div className={classes.findBG}>
      <div className={classes.dialog}>
        <a>
          <div className={classes.grow} />
          <div>
            <span>Find 1 friend</span>
          </div>
        </a>
        <a>
          <div className={classes.grow} />
          <div>
            <span>Find 2 friends</span>
          </div>
        </a>
        <a>
          <div className={classes.grow} />
          <div>
            <span>Find 4 friends</span>
          </div>
        </a>
        <i className="fas fa-times" />
      </div>
    </div>
  );
}

export default Layout;
