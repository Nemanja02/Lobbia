import React, { Component } from "react";
import classes from "./Sidebar.module.scss";

function NavHeading({ title }) {
  return <div className={classes.navHeading}>{title.toUpperCase()}</div>;
}

export class Sidebar extends Component {
  render() {
    return (
      <div className={classes.container}>
        <span className={classes.sidebarHeading}>Ovde logo i ime</span>
        <ul className={classes.sidebar}>
          {["Feed", "My Profile", "Settings"].map(el => {
            let faIcon;
            if (el === "Feed") faIcon = "fas fa-th-list";
            if (el === "My Profile") faIcon = "fas fa-user";
            if (el === "Settings") faIcon = "fas fa-cog";
            return (
              <p key={el} className={classes.sidebarEl}>
                <i className={`${faIcon} ${classes.sidebar_icon}`} /> {el}
              </p>
            );
          })}
        </ul>
        <NavHeading title="Lobbies" />
        <span style={{ color: "#fff" }}>I ovde dole ispod lista lobbya</span>
      </div>
    );
  }
}

export default Sidebar;
