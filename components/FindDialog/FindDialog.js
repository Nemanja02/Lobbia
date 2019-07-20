import React from "react";
import classes from "./Find.module.scss";

function Layout(props) {
  function killme(element) {
    console.log(element);
  }

  return (
    <div id={classes.findBG}>
      <div className={classes.dialog}>
        <span>Create Lobby</span>
        <div>
          <a>
            <div className={classes.grow} />
            <div className={classes.group}>
              <span>Lobby size: 2</span>
              <span>Prepare for trouble and make it double!</span>
            </div>
          </a>
          <a>
            <div className={classes.grow} />
            <div className={classes.group}>
              <span>Lobby size: 5</span>
              <span>Prepare for trouble and make it double!</span>
            </div>
          </a>
          <a>
            <div className={classes.grow} />
            <div className={classes.group}>
              <span>Custom settings</span>
              <span>Prepare for trouble and make it double!</span>
            </div>
          </a>
        </div>
        <i className="fas fa-times" onClick={killme(this)} />
      </div>
    </div>
  );
}

export default Layout;
