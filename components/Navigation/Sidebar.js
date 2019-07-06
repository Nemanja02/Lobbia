import React, { Component } from "react";
import classes from "./Sidebar.module.scss";

function NavHeading({ title }) {
  return <span className={classes.navHeading}>{title}</span>
}

function Profile({ppicture, username, activity}) {
  return (
    <div className={classes.user}>
      <img src={ppicture} className={`${classes.ppicture} ${classes.unselectable}`}/>
      <div className={classes.online} />
      <div className={classes.about}>
        <span className={classes.username}>{username}</span>
        <span className={classes.activity}>{activity}</span>
      </div>
    </div>
  );
}

function Friend({ppicture, username, activity}) {
  let status;
  if(activity==="online") status = classes.green;
  else if (activity==="offline") status = classes.black;
  else if (activity==="do not disturb") status = classes.red;
  else status = classes.yellow;
  
  return (
    <div className={classes.friend}>
      <img src={ppicture} className={`${classes.fppicture} ${classes.unselectable}`}/>
      <div className={`${classes.fonline} ${status}`} />
      <div className={classes.fabout}>
        <span className={classes.fusername}>{username}</span>
        <span className={classes.factivity}>{activity}</span>
      </div>
    </div>
  );
}

export class Sidebar extends Component {
  render() {
    return (
      <div className={classes.container}>
        <div className={classes.division}>
          <Profile ppicture="https://media.wired.com/photos/593222b926780e6c04d2a195/master/w_2400,c_limit/Zuck-TA-AP_17145748750763.jpg" username="MarkZucc" activity="Playing Minecraft survival" />
          <ul className={classes.sidebar}>
            {["Feed", "Profile", "Settings"].map(el => {
              let faIcon;
              if (el === "Feed") faIcon = "fas fa-th-list";
              if (el === "Profile") faIcon = "fas fa-user";
              if (el === "Settings") faIcon = "fas fa-cog";
              return (
                <p key={el} className={classes.sidebarEl}>
                  <i className={`${faIcon} ${classes.sidebar_icon}`} /> {el}
                </p>
              );
            })}
          </ul>
        </div>
        
        <div className={`${classes.division} ${classes.growdiv}`}>
          <NavHeading title="Friends"  />
          <div className={classes.scrollable}>
            <Friend ppicture="https://media.wired.com/photos/593222b926780e6c04d2a195/master/w_2400,c_limit/Zuck-TA-AP_17145748750763.jpg" username="MarkZuccClone1" activity="online" />
            <Friend ppicture="https://media.wired.com/photos/593222b926780e6c04d2a195/master/w_2400,c_limit/Zuck-TA-AP_17145748750763.jpg" username="MarkZuccClone2" activity="offline" />
            <Friend ppicture="https://media.wired.com/photos/593222b926780e6c04d2a195/master/w_2400,c_limit/Zuck-TA-AP_17145748750763.jpg" username="MarkZuccClone3" activity="playing League of legends" />
            <Friend ppicture="https://media.wired.com/photos/593222b926780e6c04d2a195/master/w_2400,c_limit/Zuck-TA-AP_17145748750763.jpg" username="MarkZuccClone4" activity="do not disturb" />
            <Friend ppicture="https://media.wired.com/photos/593222b926780e6c04d2a195/master/w_2400,c_limit/Zuck-TA-AP_17145748750763.jpg" username="MarkZuccClone5" activity="online" />
            <Friend ppicture="https://media.wired.com/photos/593222b926780e6c04d2a195/master/w_2400,c_limit/Zuck-TA-AP_17145748750763.jpg" username="MarkZuccClone6" activity="offline" />
            <Friend ppicture="https://media.wired.com/photos/593222b926780e6c04d2a195/master/w_2400,c_limit/Zuck-TA-AP_17145748750763.jpg" username="MarkZuccClone7" activity="playing League of legends" />
            <Friend ppicture="https://media.wired.com/photos/593222b926780e6c04d2a195/master/w_2400,c_limit/Zuck-TA-AP_17145748750763.jpg" username="MarkZuccClone8" activity="do not disturb" />
            <Friend ppicture="https://media.wired.com/photos/593222b926780e6c04d2a195/master/w_2400,c_limit/Zuck-TA-AP_17145748750763.jpg" username="MarkZuccClone9" activity="online" />
            <Friend ppicture="https://media.wired.com/photos/593222b926780e6c04d2a195/master/w_2400,c_limit/Zuck-TA-AP_17145748750763.jpg" username="MarkZuccClone10" activity="offline" />
            <Friend ppicture="https://media.wired.com/photos/593222b926780e6c04d2a195/master/w_2400,c_limit/Zuck-TA-AP_17145748750763.jpg" username="MarkZuccClone11" activity="playing League of legends" />
            <Friend ppicture="https://media.wired.com/photos/593222b926780e6c04d2a195/master/w_2400,c_limit/Zuck-TA-AP_17145748750763.jpg" username="MarkZuccClone12" activity="do not disturb" />
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
