import React from "react";
import Sidebar from "../Navigation/Sidebar";
import classes from "./Layout.module.scss";
import SidebarSecond from "../Navigation/SidebarSecond";

function Layout(props) {
  return (
    <div id={classes.root}>
      <Sidebar />
      <SidebarSecond />
      <div id={classes.main}>{props.children}</div>
    </div>
  )
}

export default Layout;
