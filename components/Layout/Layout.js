import React from "react";
import Navbar from "../Navbar/Navbar";
import classes from "./Layout.module.scss";

function Layout(props) {
  return <div id={classes.root}>
      <Navbar />
      <div id={classes.main}>{props.children}</div>;
    </div>
}

export default Layout;
