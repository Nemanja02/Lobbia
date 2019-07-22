import React, { Component } from "react";
import classes from "./Sidebar.module.scss";
import Typography from "../Typography/Typography";
import FindDialog from "../FindDialog/FindDialog";

function Game({ icon, name }) {
  const [isSearchModalOpen, setModalVisibility] = React.useState(false);

  const toggleSearchModal = prevValue => setModalVisibility(!prevValue);

  return (
    <div className={classes.gamediv}>
      <FindDialog
        clicked={() => toggleSearchModal(isSearchModalOpen)}
        open={isSearchModalOpen}
      />
      <img
        src={icon}
        className={classes.gameicon}
      />
      <span className={classes.gamename}>{name}</span>
      <div className={classes.playicon}>
        <i
          onClick={() => toggleSearchModal(isSearchModalOpen)}
          className={`fas fa-play`}
        />
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
      <div className={classes.container}>
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