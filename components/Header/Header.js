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
        <title>{capitalize(this.props.page)} | Lobbia</title>
        <div
          className={`
            ${classes.darken} 
            ${this.state.dropped ? null : classes.closed}
          `}
          onClick={() => unDrop()}
        />
        <div className={classes.mobileNav}>
          <a href="/" tabIndex="-1">
            <img src="assets/PixelArt.png" alt="Lobbia" />
          </a>
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
                  <a tabIndex="0" href={`/${el === "home" ? "" : el}`}>
                    {capitalize(el)}
                  </a>
                  <div />
                </li>
              );
            })}
          </ul>
        </nav>
        <div
          style={this.props.hideButton ? { display: "none" } : null}
          className={classes.buttons}
        >
          <Button href="/login">Log in</Button>
        </div>
      </div>
    );
  }
}

export default Header;
