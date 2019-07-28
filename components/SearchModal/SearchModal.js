import React, { useState } from "react";
import classes from "./SearchModal.module.scss";
import { Slide } from "@material-ui/core";

function SearchModal({ open, clicked, types }) {
  return open ? (
    <div id={classes.findBG}>
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
        </div>
      </Slide>
    </div>
  ) : null;
}

export default SearchModal;
