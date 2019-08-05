import React, { Component } from "react";
import classes from "./styles/Index.module.scss";

export class index extends Component {
  render() {
    return (
      <>
        <div className={classes.nav}>
          <img src="assets/PixelArt.png" />

          <nav>
            <ul>
              <li className={classes.active}>
                Home
                <div />
              </li>
              <li>
                About
                <div />
              </li>
              <li>
                Support
                <div />
              </li>
            </ul>
          </nav>

          <div className={classes.buttons}>
            <a href="/register">Sign up</a>
            <a href="/login" className={classes.primary}>
              log in
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default index;
