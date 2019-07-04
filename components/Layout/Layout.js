import React from "react";
import Sidebar from "../Navigation/Sidebar";
import classes from "./Layout.module.scss";

function Layout(props) {
  return (
    <div id={classes.root}>
      <Sidebar />
      <div id={classes.main}>{props.children}</div>;
    </div>
  );
}

export default Layout;
