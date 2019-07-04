import React, { Component } from "react";
import classes from "./Sidebar.module.scss";
import Link from "./NavLink/NavLink";
import Typography from "../Typography/Typography";

function NavHeading({ title }) {
  return <div className={classes.navHeading}>{title.toUpperCase()}</div>;
}

export class Sidebar extends Component {
  render() {
    return (
      <div className={classes.container}>
        <div className={classes.sidebarHeading}>
          <Typography title="Lobbia" color="light" />
        </div>
        <ul className={classes.sidebar}>
          {["Feed", "My Profile", "Settings"].map(el => {
            let faIcon;
            let url;
            if (el === "Feed") {
              faIcon = "fas fa-th-list";
              url = "/feed";
            }
            if (el === "My Profile") {
              faIcon = "fas fa-user";
              url = "/user/:id";
            }
            if (el === "Settings") {
              faIcon = "fas fa-cog";
              url = "/settings";
            }
            return (
              <p key={el} className={classes.sidebarEl}>
                <Link title={el} path={url} icon={faIcon} />
              </p>
            );
          })}
        </ul>
        <NavHeading title="lobbies" />
        <span style={{ color: "#fff" }}>I ovde dole ispod lista lobbya</span>
      </div>
    );
  }
}

export default Sidebar;
