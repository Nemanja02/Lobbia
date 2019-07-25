import React from "react";
import Sidebar from "../Navigation/Sidebar";
import classes from "./Layout.module.scss";
// import SidebarSecond from "../Navigation/SidebarSecond";
import TopBar from "../Navigation/TopBar";
import { connect } from "react-redux";
import * as actions from "../../actions/userActions";
import jwt from "jsonwebtoken";
import { parseCookies, destroyCookie } from "nookies";

function Layout(props) {
  React.useEffect(() => {
    async function fetchData() {
      const decoded = await jwt.decode(parseCookies().token);
      if (decoded) {
        props.fetchUserData(decoded.id);
      }
    }

    if (parseCookies().token) fetchData();
    else return;
  }, []);

  return (
    <div id={classes.root}>
      <TopBar
        logout={async () => {
          const decoded = await jwt.decode(parseCookies().token);
          props.logout(decoded.id);
          props.clearState();
          destroyCookie({}, "token");
        }}
      />
      <div className={classes.wrap}>
        <Sidebar />
        <div id={classes.main}>{props.children}</div>
        {/* <SidebarSecond /> */}
      </div>
    </div>
  );
}

export default connect(
  state => state,
  actions
)(Layout);
