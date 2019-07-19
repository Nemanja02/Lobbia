import React, { Component } from "react";
import classes from "./Sidebar.module.scss";
import Typography from "../Typography/Typography";

function Game({ icon, name }) {
  return (
    <div className={classes.gamediv}>
      <img
        src={icon}
        className={classes.gameicon}
      />
      <span className={classes.gamename}>{name}</span>
      <div className={classes.playicon}>
        <i className={`fas fa-play`} />
      </div>
    </div>
  );
}

class SidebarSecond extends Component {
  state = {
    activeTab: 1
  };

  switchActiveTab = i => {
    this.setState({ activeTab: i });
  };

  render() {
    return (
      <div className={classes.containerRight}>
        <div className={`${classes.division} ${classes.growdiv}`}>
          <div className={classes["tab-control"]}>
            <Typography
              active={this.state.activeTab === 1 ? true : false}
              clicked={() => this.switchActiveTab(1)}
              variant="nav-title"
              color="light"
            >
              Games
            </Typography>
            <Typography
              clicked={() => this.switchActiveTab(2)}
              active={this.state.activeTab === 2 ? true : false}
              variant="nav-title"
              color="light"
            >
              smth else
            </Typography>
          </div>
          <div className={classes.scrollable}>
            {[
              "Minecraft",
              "Roblox",
              "Roblox 2",
              "Despacito",
              "Candy crush saga xD"
            ].map((el, i) => {
              return (
                <Game
                  key={el}
                  icon="https://media.wired.com/photos/593222b926780e6c04d2a195/master/w_2400,c_limit/Zuck-TA-AP_17145748750763.jpg"
                  name={el}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default SidebarSecond;
