import React, { useState } from "react";
import classes from "./FindDialog.module.scss";
import { Slide } from "@material-ui/core";

function FindDialog({ open, clicked, types }) {
  return open ? (
    <div id={classes.findBG}>
<<<<<<< HEAD
      <Slide in={open} direction="up" mountOnEnter unmountOnExit>
        <div className={classes.dialog}>
          <span>Create Lobby</span>
          <div>
            {types.map(el => (
              <a key={el.heading}>
                <div className={classes.grow} />
                <div className={classes.group}>
                  <span>{el.heading}</span>
                  <span>{el.subheading}</span>
                </div>
              </a>
            ))}
          </div>
          <i className="fas fa-times" onClick={clicked} />
=======
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
>>>>>>> f78da8e229498f5f3fbff3a2959084c76b981008
        </div>
      </Slide>
    </div>
  ) : null;
}

export default FindDialog;
