import React, { useState } from "react";
import classes from "./FindDialog.module.scss";

function FindDialog({ open, clicked }) {
  return open ? (
    <div id={classes.findBG}>
      <div className={classes.dialog}>
        <span>Create Lobby</span>
        <div className={classes.selected}>
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
          <a className={classes.selected}>
            <div className={classes.grow} />
            <div className={classes.group}>
              <span>Custom settings</span>
              <span>Prepare for trouble and make it double!</span>
            </div>
          </a>
        </div>
        <i className="fas fa-times" onClick={clicked} />
      </div>
    </div>
  ) : null;
}

export default FindDialog;
