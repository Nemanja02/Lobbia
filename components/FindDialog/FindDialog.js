import React from "react";
import classes from "./Find.module.scss";

function Layout(props) {
  return (
    <div className={classes.findBG}>
        <div className={classes.dialog}>
            <div>
                <div />
                <span>Find 1 friend</span>
            </div>
            <div>
                <div />
                <span>Find 2 friends</span>
            </div>
            <div>
                <div />
                <span>Find 4 friends</span>
            </div>
        </ div>
    </div>
  )
}

export default Layout;