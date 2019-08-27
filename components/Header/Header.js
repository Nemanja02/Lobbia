import React, { Component } from "react";
import classes from "./Header.module.scss";
import Burger from "../Burger/Burger";
import Button from "../Button/Button";

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

class Header extends Component {
  state = {
    dropped: false
  };

  render() {
    const changeDrop = () => {
      this.setState(state => {
        return { dropped: !state.dropped };
      });
    };

    const unDrop = () => {
      this.setState(state => {
        return { dropped: false };
      });
    };

    return (
      <div className={classes.nav}>
        <div
          className={`${classes.darken} ${
            this.state.dropped ? null : classes.closed
          }`}
          onClick={() => unDrop()}
        />
        <div className={classes.mobileNav}>
          <img src="assets/PixelArt.png" />
          <Burger clicked={changeDrop} state={this.state.dropped} />
        </div>
        <nav className={this.state.dropped ? null : classes.closed}>
          <ul>
            {["home", "about", "support"].map(el => {
              return (
                <li
                  key={el}
                  className={el === this.props.page ? classes.active : null}
                >
                  <a tabindex="0" href={`/${el === "home" ? "" : el}`}>
                    {capitalize(el)}
                  </a>
                  <div />
                </li>
              );
            })}
          </ul>
        </nav>
        <div className={classes.buttons}>
          <Button href="/login" primary="true">
            Log in
          </Button>
        </div>
      </div>
    );
  }
}

export default Header;
