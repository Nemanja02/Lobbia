import React from "react";
import Sidebar from "../Navigation/Sidebar";
import classes from "./Layout.module.scss";

function Layout(props) {
  return (
    <div id={classes.root}>
      <link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined" rel="stylesheet" />
      <Sidebar />
      <div id={classes.main}>{props.children}</div>;
    </div>
  );
}

export default Layout;
