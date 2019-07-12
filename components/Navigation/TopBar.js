import React from "react";
import classes from "./TopBar.module.scss";

function TopBar() {
  return (
    <div className={classes.topbar}>
      <span className={classes.logo}>Lobbia</span>
      <div className={classes.isearch}>
        <i className={`fas fa-compass ${classes.button_search_icon}`} />
      </div>
      <div>
      <input placeholder="Search" className={classes.search} />
      <i className={`fas fa-search ${classes.search_icon_input}`}/>
      </div>

    </div>
  );
}

export default TopBar;
