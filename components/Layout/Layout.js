import React from "react";
import Sidebar from "../Navigation/Sidebar";
import classes from "./Layout.module.scss";
import SidebarSecond from "../Navigation/SidebarSecond";
import TopBar from "../Navigation/TopBar";

function Layout(props) {
  return (
    <div id={classes.root}>
      <TopBar />
      <div className={classes.wrap}>
        <Sidebar />
        <div id={classes.main}>{props.children}</div>
        <SidebarSecond />
      </div>
    </div>
  )
}

export default Layout;