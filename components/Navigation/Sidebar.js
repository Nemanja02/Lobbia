import React, { Component } from "react";
import classes from "./Sidebar.module.scss";
import NavLink from "./NavLink/NavLink";
import NavHeading from "./NavHeading";

function Profile({ ppicture, username, activity }) {
  return (
    <div className={classes.user}>
      <img
        src={ppicture}
        className={`${classes.ppicture} ${classes.unselectable}`}
      />
      <div className={classes.online} />
      <div className={classes.about}>
        <span className={classes.username}>{username}</span>
        <span className={classes.activity}>{activity}</span>
      </div>
    </div>
  );
}

function Friend({ ppicture, username, activity, link }) {
  let status;
  let displayActivity;
  if (activity === "on") {
    status = classes.green;
    displayActivity = "Online";
  } else if (activity === "off") {
    status = classes.black;
    displayActivity = "Offline";
  } else if (activity === "dnd") {
    status = classes.red;
    displayActivity = "Do Not Disturb";
  } else {
    status = classes.yellow;
    displayActivity = activity;
  }

  return (
    <a href={link} className={classes.friend}>
      <img
        src={ppicture}
        className={`${classes.fppicture} ${classes.unselectable}`}
      />
      <div className={`${classes.fonline} ${status}`} />
      <div className={classes.fabout}>
        <span className={classes.fusername}>{username}</span>
        <span className={classes.factivity}>{displayActivity}</span>
      </div>
    </a>
  );
}

export class Sidebar extends Component {
  render() {
    return (
      <div className={classes.container}>
        <div className={classes.division}>
          <Profile
            ppicture="https://ichef.bbci.co.uk/news/660/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg"
            username="MarkZucc"
            activity="Playing Minecraft survival"
          />
          <ul className={classes.sidebar}>
            {["Feed", "Profile", "Settings"].map(el => {
              let faIcon;
              let href;
              if (el === "Feed") {
                faIcon = "fas fa-th-list";
                href = "/feed";
              }
              if (el === "Profile") {
                faIcon = "fas fa-user";
                href = "/user/:id";
              }
              if (el === "Settings") {
                faIcon = "fas fa-cog";
                href = "/settings";
              }
              return (
                <p key={el} className={classes.sidebarEl}>
                  <NavLink path={href} title={el} icon={faIcon} />
                </p>
              );
            })}
          </ul>
        </div>

        <div className={`${classes.division} ${classes.growdiv}`}>
          <NavHeading title="friends" />
          <div id="style-3" className={classes.scrollable}>
            <Friend
              ppicture="https://media.wired.com/photos/593222b926780e6c04d2a195/master/w_2400,c_limit/Zuck-TA-AP_17145748750763.jpg"
              username="MarkZuccClone1"
              activity="on"
              link="lol"
            />
            <Friend
              ppicture="https://media.wired.com/photos/593222b926780e6c04d2a195/master/w_2400,c_limit/Zuck-TA-AP_17145748750763.jpg"
              username="MarkZuccClone2"
              activity="off"
              link="lol"
            />
            <Friend
              ppicture="https://media.wired.com/photos/593222b926780e6c04d2a195/master/w_2400,c_limit/Zuck-TA-AP_17145748750763.jpg"
              username="MarkZuccClone3"
              activity="playing League of legends"
              link="lol"
            />
            <Friend
              ppicture="https://media.wired.com/photos/593222b926780e6c04d2a195/master/w_2400,c_limit/Zuck-TA-AP_17145748750763.jpg"
              username="MarkZuccClone4"
              activity="off"
              link="lol"
            />
            <Friend
              ppicture="https://media.wired.com/photos/593222b926780e6c04d2a195/master/w_2400,c_limit/Zuck-TA-AP_17145748750763.jpg"
              username="MarkZuccClone5"
              activity="on"
              link="lol"
            />
            <Friend
              ppicture="https://media.wired.com/photos/593222b926780e6c04d2a195/master/w_2400,c_limit/Zuck-TA-AP_17145748750763.jpg"
              username="MarkZuccClone6"
              activity="off"
              link="lol"
            />
            <Friend
              ppicture="https://media.wired.com/photos/593222b926780e6c04d2a195/master/w_2400,c_limit/Zuck-TA-AP_17145748750763.jpg"
              username="MarkZuccClone7"
              activity="playing League of legends"
              link="lol"
            />
            <Friend
              ppicture="https://media.wired.com/photos/593222b926780e6c04d2a195/master/w_2400,c_limit/Zuck-TA-AP_17145748750763.jpg"
              username="MarkZuccClone8"
              activity="off"
              link="lol"
            />
            <Friend
              ppicture="https://media.wired.com/photos/593222b926780e6c04d2a195/master/w_2400,c_limit/Zuck-TA-AP_17145748750763.jpg"
              username="MarkZuccClone9"
              activity="on"
              link="lol"
            />
            <Friend
              ppicture="https://media.wired.com/photos/593222b926780e6c04d2a195/master/w_2400,c_limit/Zuck-TA-AP_17145748750763.jpg"
              username="MarkZuccClone10"
              activity="off"
              link="lol"
            />
            <Friend
              ppicture="https://media.wired.com/photos/593222b926780e6c04d2a195/master/w_2400,c_limit/Zuck-TA-AP_17145748750763.jpg"
              username="MarkZuccClone11"
              activity="playing League of legends"
              link="lol"
            />
            <Friend
              ppicture="ihttps://media.wired.com/photos/593222b926780e6c04d2a195/master/w_2400,c_limit/Zuck-TA-AP_17145748750763.jpg"
              username="MarkZuccClone12"
              activity="off"
              link="lol"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
