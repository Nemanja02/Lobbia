import React from "react";
import classes from "./TopBar.module.scss";

function TopBar() {
  return (
    <div className={classes.topbar}>
      <div className={classes.start}>
        <span className={classes.logo}>Lobbia</span>
      </div>
      <div className={classes.center}>
        <div className={classes.isearch}>
          <i className={`fas fa-compass ${classes.button_search_icon}`} />
        </div>
      </div>
      <div className={classes.end}>
        <div className={classes.sbar}>
        <input placeholder="Search" className={classes.search} />
        <i className={`fas fa-search ${classes.search_icon_input}`}/>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
