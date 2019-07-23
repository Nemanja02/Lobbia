import React, { Component } from "react";
import classes from "./Sidebar.module.scss";
import NavLink from "./NavLink/NavLink";
import Typography from "../Typography/Typography";
import { connect } from "react-redux";

function Profile({ profilePicture, username, activity }) {
  return (
    <div className={classes.user}>
      <img src={profilePicture} />
      <div className={classes.online} />
      <div className={classes.about}>
        <span className={classes.username}>{username}</span>
        <span className={classes.activity}>{activity}</span>
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
      <div
        style={{
          backgroundImage: `url(${profilePicture})`,
          backgroundSize: "center"
        }}
      />
      <div className={`${classes.online} ${status}`} />
      <div className={classes.about}>
        <span className={classes.username}>{username}</span>
        <span className={classes.activity}>{displayActivity}</span>
      </div>
    </a>
  );
}

export class Sidebar extends Component {
  state = {
    activeTab: 1
  };

  switchActiveTab = i => {
    this.setState({ activeTab: i });
  };

  render() {
    return (
      <div className={classes.container}>
        <div className={classes.division}>
          <Profile
            profilePicture={this.props.user.profilePicture}
            username={this.props.user.username}
            activity={
              this.props.user.accountDescription ||
              "Lobbia is an awesome website"
            }
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
          <div className={classes["tab-control"]}>
            <Typography
              active={this.state.activeTab === 1 ? true : false}
              clicked={() => this.switchActiveTab(1)}
              variant="nav-title"
              color="light"
            >
              Connections
            </Typography>
            <Typography
              clicked={() => this.switchActiveTab(2)}
              active={this.state.activeTab === 2 ? true : false}
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
}

export default connect(state => state)(Sidebar);
