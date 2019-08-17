import React, { Component } from "react";
import classes from "./Header.module.scss";
import Burger from "../Burger/Burger";

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

    return (
      <div className={classes.nav}>
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
                  tabIndex="0"
                  className={el === this.props.page ? classes.active : null}
                >
                  <a href={`/${el === "home" ? "" : el}`}>{capitalize(el)}</a>
                  <div />
                </li>
              );
            })}
          </ul>
        </nav>
        <div className={classes.buttons}>
          <a href="/feed" className={classes.primary}>
            Enter Lobbia
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
