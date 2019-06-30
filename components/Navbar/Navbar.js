import React, { Component } from "react";
import classes from "./Navbar.module.scss";
import Link from "next/link";

export class Navbar extends Component {
  render() {
    return (
      <div className={classes.navbar}>
        <h6 className={classes.navbarHeading}>NovicaTheRapist</h6>
        <div className={classes.navbarNavigation}>
          {["Home", "About", "Connect"].map(el => (
            <Link key={el} href="/">
              <a className={classes.navbarNavigation_item}>{el}</a>
            </Link>
          ))}
        </div>
        <button className={classes.globalSearch}>
          <i className="fas fa-search-location" />
        </button>
      </div>
    );
  }
}

export default Navbar;
