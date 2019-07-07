import React from "react";
import classes from "./Sidebar.module.scss";
import NavHeading from "./NavHeading";

function Game({ icon, name }) {
  return (
    <div className={classes.gamediv}>
      <img
        src={icon}
        className={`${classes.gameicon} ${classes.unselectable}`}
      />
      <span className={classes.gamename}>{name}</span>
      <div className={classes.playicon}>
        <i className={`fas fa-play`} />
      </div>
    </div>
  );
}

function SidebarSecond() {
  return (
    <div className={classes.containerRight}>
      <div className={`${classes.division} ${classes.growdiv}`}>
        <NavHeading title="Games" />
        <div className={classes.scrollable}>
          <Game
            icon="https://media.wired.com/photos/593222b926780e6c04d2a195/master/w_2400,c_limit/Zuck-TA-AP_17145748750763.jpg"
            name="Zucc The Game"
          />
          <Game
            icon="https://media.wired.com/photos/593222b926780e6c04d2a195/master/w_2400,c_limit/Zuck-TA-AP_17145748750763.jpg"
            name="Zucc The Game"
          />
          <Game
            icon="https://media.wired.com/photos/593222b926780e6c04d2a195/master/w_2400,c_limit/Zuck-TA-AP_17145748750763.jpg"
            name="Zucc The Game"
          />
          <Game
            icon="https://media.wired.com/photos/593222b926780e6c04d2a195/master/w_2400,c_limit/Zuck-TA-AP_17145748750763.jpg"
            name="Zucc The Game"
          />
          <Game
            icon="https://media.wired.com/photos/593222b926780e6c04d2a195/master/w_2400,c_limit/Zuck-TA-AP_17145748750763.jpg"
            name="Zucc The Game"
          />
          <Game
            icon="https://media.wired.com/photos/593222b926780e6c04d2a195/master/w_2400,c_limit/Zuck-TA-AP_17145748750763.jpg"
            name="Zucc The Game"
          />
          <Game
            icon="https://media.wired.com/photos/593222b926780e6c04d2a195/master/w_2400,c_limit/Zuck-TA-AP_17145748750763.jpg"
            name="Zucc The Game"
          />
          <Game
            icon="https://media.wired.com/photos/593222b926780e6c04d2a195/master/w_2400,c_limit/Zuck-TA-AP_17145748750763.jpg"
            name="Zucc The Game"
          />
          <Game
            icon="https://media.wired.com/photos/593222b926780e6c04d2a195/master/w_2400,c_limit/Zuck-TA-AP_17145748750763.jpg"
            name="Zucc The Game"
          />
          <Game
            icon="https://media.wired.com/photos/593222b926780e6c04d2a195/master/w_2400,c_limit/Zuck-TA-AP_17145748750763.jpg"
            name="Zucc The Game"
          />
          <Game
            icon="https://media.wired.com/photos/593222b926780e6c04d2a195/master/w_2400,c_limit/Zuck-TA-AP_17145748750763.jpg"
            name="Zucc The Game"
          />
          <Game
            icon="https://media.wired.com/photos/593222b926780e6c04d2a195/master/w_2400,c_limit/Zuck-TA-AP_17145748750763.jpg"
            name="Zucc The Game"
          />
          <Game
            icon="https://media.wired.com/photos/593222b926780e6c04d2a195/master/w_2400,c_limit/Zuck-TA-AP_17145748750763.jpg"
            name="Zucc The Game"
          />
          <Game
            icon="https://media.wired.com/photos/593222b926780e6c04d2a195/master/w_2400,c_limit/Zuck-TA-AP_17145748750763.jpg"
            name="Zucc The Game"
          />
          <Game
            icon="https://media.wired.com/photos/593222b926780e6c04d2a195/master/w_2400,c_limit/Zuck-TA-AP_17145748750763.jpg"
            name="Zucc The Game"
          />
          <Game
            icon="https://media.wired.com/photos/593222b926780e6c04d2a195/master/w_2400,c_limit/Zuck-TA-AP_17145748750763.jpg"
            name="Zucc The Game"
          />
          <Game
            icon="https://media.wired.com/photos/593222b926780e6c04d2a195/master/w_2400,c_limit/Zuck-TA-AP_17145748750763.jpg"
            name="Zucc The Game"
          />
          <Game
            icon="https://media.wired.com/photos/593222b926780e6c04d2a195/master/w_2400,c_limit/Zuck-TA-AP_17145748750763.jpg"
            name="Zucc The Game"
          />
          <Game
            icon="https://media.wired.com/photos/593222b926780e6c04d2a195/master/w_2400,c_limit/Zuck-TA-AP_17145748750763.jpg"
            name="Zucc The Game"
          />
          <Game
            icon="https://media.wired.com/photos/593222b926780e6c04d2a195/master/w_2400,c_limit/Zuck-TA-AP_17145748750763.jpg"
            name="Zucc The Game"
          />
          <Game
            icon="https://media.wired.com/photos/593222b926780e6c04d2a195/master/w_2400,c_limit/Zuck-TA-AP_17145748750763.jpg"
            name="Zucc The Game"
          />
          <Game
            icon="https://media.wired.com/photos/593222b926780e6c04d2a195/master/w_2400,c_limit/Zuck-TA-AP_17145748750763.jpg"
            name="Zucc The Game"
          />
          <Game
            icon="https://media.wired.com/photos/593222b926780e6c04d2a195/master/w_2400,c_limit/Zuck-TA-AP_17145748750763.jpg"
            name="Zucc The Game"
          />
          <Game
            icon="https://media.wired.com/photos/593222b926780e6c04d2a195/master/w_2400,c_limit/Zuck-TA-AP_17145748750763.jpg"
            name="Zucc The Game"
          />
          <Game
            icon="https://media.wired.com/photos/593222b926780e6c04d2a195/master/w_2400,c_limit/Zuck-TA-AP_17145748750763.jpg"
            name="Zucc The Game"
          />
          <Game
            icon="https://media.wired.com/photos/593222b926780e6c04d2a195/master/w_2400,c_limit/Zuck-TA-AP_17145748750763.jpg"
            name="Zucc The Game"
          />
        </div>
      </div>
    </div>
  );
}

export default SidebarSecond;
