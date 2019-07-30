import React, { Component } from "react";
import classes from "./Sidebar.module.scss";
import NavLink from "./NavLink/NavLink";
import Typography from "../Typography/Typography";
import { connect } from "react-redux";

function Profile({ profilePicture, username, status }) {
  return (
    <div className={classes.user}>
      <img src={profilePicture} />
      <div className={classes.online} />
      <div className={classes.about}>
        <span className={classes.username}>{username}</span>
        <span className={classes.activity}>{status}</span>
      </div>
    </div>
  );
}

function Friend({ profilePicture, username, activity, link }) {
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
      <img src={profilePicture} />
      <div className={`${classes.online} ${status}`} />
      <div className={classes.about}>
        <span className={classes.username}>{username}</span>
        <span className={classes.activity}>{displayActivity}</span>
      </div>
    </a>
  );
}

export function Sidebar(props) {


  const [activeTab, changeTabState] = React.useState(1);

  const switchActiveTab = i => {
    changeTabState(i)
  };

  return (
    <div className={classes.container}>
      <div className={classes.division}>
        <Profile
          profilePicture={props.user.profilePicture}
          username={props.user.username}
          status={props.user.isOnline ? "online" : null}
        />
        <ul className={classes.sidebar}>
          {[{
            name: "Feed",
            type: "link"
          }, {
            name: "Profile",
            type: "button",
            id: props.user.id
          }, {
            name: "Settings",
            type: "link"
          }].map(el => {
            let faIcon;
            let href;
            if (el.name === "Feed") {
              faIcon = "fas fa-th-list";
              href = "/feed";
            }
            if (el.name === "Profile") {
              faIcon = `fas fa-user`;
              href = `/user/${props.user.id}`;
            }
            if (el.name === "Settings") {
              faIcon = "fas fa-cog";
              href = "/settings";
            }
            return (
              <p key={el.name} className={classes.sidebarEl}>
                <NavLink type={el.type} id={el.id || null} statePath={props.path.value} path={href} title={el.name} icon={faIcon} />
              </p>
            );
          })}
        </ul>
      </div>

      <div className={`${classes.division} ${classes.growdiv}`}>
        <div className={classes["tab-control"]}>
          <Typography
            active={activeTab === 1 ? true : false}
            clicked={() => switchActiveTab(1)}
            variant="nav-title"
            color="light"
          >
            Connections
            </Typography>
          <Typography
            clicked={() => switchActiveTab(2)}
            active={
              activeTab === 2 ? true : false}
            variant="nav-title"
            color="light"
          >
            Lobbies
            </Typography>
        </div>
        <div
          id="style-3"
          className={`${classes.scrollable} ${classes.tab_body}`}
        >
          {[
            "Faggot",
            "Big chungus",
            "Rrrrrrrresi",
            "Baka prasqui",
            "Novica"
          ].map((el, i) => {
            let status = "on";
            if (i % 2 === 0) {
              status = "dnd";
            }
            if (i === 4) status = "off";
            return (
              <Friend
                key={el}
                profilePicture="https://media.wired.com/photos/593222b926780e6c04d2a195/master/w_2400,c_limit/Zuck-TA-AP_17145748750763.jpg"
                username={el}
                activity={status}
                link="lol"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default connect(state => state)(Sidebar);
