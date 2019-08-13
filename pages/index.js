import React, { Component } from "react";
import classes from "./styles/Index.module.scss";
import { decorateWithLogger } from "graphql-tools";

function Drop({ dropped }) {
  return (dropped) ? (
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
    ) : null;

}

export class index extends Component {
  render() {
    var drop = true;

    function changeDrop() {
      drop = !drop;
      console.log("State: " + drop);

    }

    return (
      <>
        <div id={classes.main}>
          <div className={classes.nav}>
            <div className={classes.mobileNav}>
              <img src="assets/PixelArt.png" />
              <div onClick={() => changeDrop()} tabIndex="0" className={classes.burger}>
                <div />
                <div />
                <div />
              </div>
            </div>
            <nav>
              <Drop dropped={drop} />
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
