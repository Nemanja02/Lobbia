import React from "react";
import classes from "./TopBar.module.scss";

function TopBar() {
  return (
    <div className={classes.topbar}>
      <span className={classes.logo}>Lobbia</span>
      <input placeholder="Search" className={classes.search}></input>
      <a href="lol">
        <div className={classes.isearch}><i className={`fas fa-search`} /></div>
      </a>
    </div>
  );
}

export default TopBar;
