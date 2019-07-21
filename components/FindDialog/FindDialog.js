import React, { useState } from "react";
import classes from "./FindDialog.module.scss";

function FindDialog({ open, clicked }) {
  return open ? (
    <div id={classes.findBG}>
      <div className={classes.dialog}>
        <span>Create Lobby</span>
        <div>
          <a>
            <div className={classes.grow} />
            <div className={classes.group}>
              <span>Lobby size: 2</span>
              <span>Partners in crime</span>
            </div>
          </a>
          <a>
            <div className={classes.grow} />
            <div className={classes.group}>
              <span>Lobby size: 5</span>
              <span>Gang gang!</span>
            </div>
          </a>
          <a>
            <div className={classes.grow} />
            <div className={classes.group}>
              <span>Custom settings</span>
              <span>Choose your destiny!</span>
            </div>
          </a>
        </div>
        <i className="fas fa-times" onClick={clicked} />
      </div>
    </div>
  ) : null;
}

export default FindDialog;
