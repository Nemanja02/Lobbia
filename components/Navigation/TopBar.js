import React from "react";
import classes from "./TopBar.module.scss";

function TopBar() {
  return (
    <div className={classes.topbar}>
      <span className={classes.logo}>Lobbia</span>
      <div className={classes.isearch}>
        <i className={`fas fa-compass ${classes.button_search_icon}`} />
      </div>
      <input placeholder="Search community" className={classes.search} />
    </div>
  );
}

export default TopBar;
