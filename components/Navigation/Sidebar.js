import React, { Component } from "react";
import classes from "./Sidebar.module.scss";

function NavHeading({ title }) {
  return <div className={classes.navHeading}>{title.toUpperCase()}</div>;
}

function Profile({ppicture, username, status}) {
  return <div className={classes.user}>
          <img src={ppicture} className={classes.ppicture}/>
          <div className={classes.online} />
          <div className={classes.about}>
            <span className={classes.username}>{username}</span>
            <span className={classes.status}>{status}</span>
          </div>
        </div>
}

export class Sidebar extends Component {
  render() {
    return (
      <div className={classes.container}>
        <Profile ppicture="https://media.wired.com/photos/593222b926780e6c04d2a195/master/w_2400,c_limit/Zuck-TA-AP_17145748750763.jpg" username="MarkZucc" status="Playing Minecraft survival" />
        <ul className={classes.sidebar}>
          {["Feed", "My Profile", "Settings"].map(el => {
            let Icon;
            if (el === "Feed") Icon = "list";
            if (el === "My Profile") Icon = "person";
            if (el === "Settings") Icon = "settings";
            return (
              <p key={el} className={classes.sidebarEl}>
                <i className={`${classes.materialOutlined} ${classes.sidebar_icon}`}>{Icon}</i> {el}
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
