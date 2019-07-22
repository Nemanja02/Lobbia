import React from "react";
import Sidebar from "../Navigation/Sidebar";
import classes from "./Layout.module.scss";
import SidebarSecond from "../Navigation/SidebarSecond";
import TopBar from "../Navigation/TopBar";
import { Provider } from "unstated";

function Layout(props) {
  return (
    <Provider>
      <div id={classes.root}>
        <TopBar logout={props.logout} />
        <div className={classes.wrap}>
          <Sidebar
            fullName={props.user.fullName}
            profilePicture={props.user.profilePicture}
          />
          <div id={classes.main}>{props.children}</div>
          <SidebarSecond />
        </div>
      </div>
    </Provider>
  );
}

export default Layout;
