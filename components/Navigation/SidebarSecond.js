import React from "react";
import classes from "./Sidebar.module.scss";

function NavHeading({ title }) {
  return <span className={classes.navHeading}>{title}</span>
}

function SidebarSecond() {
    return (
      <div className={classes.containerRight}>
        <div className={`${classes.division} ${classes.growdiv}`}>
          <NavHeading title="Games"  />
        </div>
      </div>
    );
}

export default SidebarSecond;
