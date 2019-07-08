import React from "react";
import classes from "./TopBar.module.scss";

function TopBar() {
  return (
    <div className={classes.topbar}>
      <span className={classes.logo}>Lobbia</span>
      <input className={classes.search}></input>
      <div className={classes.isearch}><i className={`fas fa-th-search`} /></div>
    </div>
  );
}

export default TopBar;
