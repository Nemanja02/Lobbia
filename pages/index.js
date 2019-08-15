import React, { Component } from "react";
import classes from "./styles/Index.module.scss";
import Burger from "../components/Burger/Burger";
import { decorateWithLogger } from "graphql-tools";
import { getOperationDefinition } from "apollo-utilities";

export class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropped: false
    };
  }

  render() {
    // FIXME Pavle make this work pls i cri
    function changeDrop(lol) {
      lol.setState(state => {
        return { dropped: !state.dropped };
      });
      console.log("State: " + lol.state.dropped);
    }

    return (
      <>
        <div id={classes.main}>
          <div className={classes.nav}>
            <div className={classes.mobileNav}>
              <img src="assets/PixelArt.png" />
              <Burger clicked={() => changeDrop(this)} />
            </div>
            <nav>
              <ul className={this.state.dropped ? null : classes.closed}>
                <li tabIndex="0" className={classes.active}>
                  Home
                  <div />
                </li>
                <li tabIndex="0" className={classes.closed}>
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
