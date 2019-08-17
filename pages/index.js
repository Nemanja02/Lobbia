import React, { Component } from "react";
import classes from "./styles/Index.module.scss";
import Burger from "../components/Burger/Burger";
import { decorateWithLogger } from "graphql-tools";
import { getOperationDefinition } from "apollo-utilities";

export class index extends Component {
  state = {
    dropped: false
  };

  render() {
    const changeDrop = () => {
      this.setState(state => {
        return { dropped: !state.dropped };
      });
      console.log("State: " + this.state.dropped);
    };

    return (
      <>
        <div id={classes.main}>
          <div className={classes.nav}>
            <div className={classes.mobileNav}>
              <img src="assets/PixelArt.png" />
              <Burger clicked={changeDrop} state={this.state.dropped} />
            </div>
            <nav className={this.state.dropped ? null : classes.closed}>
              <ul>
                <li tabIndex="0" className={classes.active}>
                  Home
                  <div />
                </li>
                <li tabIndex="0">
                  About
                  <div />
                </li>
                <li tabIndex="0">
                  Support
                  <div />
                </li>
              </ul>
            </nav>

            <div className={classes.buttons}>
              <a href="/feed" className={classes.primary}>
                Enter Lobbia
              </a>
            </div>
          </div>

          <div className={classes.content}>
            <div>
              <h1>Welcome</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <img src="index/IndexBG.svg" />
          </div>
        </div>
      </>
    );
  }
}

export default index;
