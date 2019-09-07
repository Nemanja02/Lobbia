import React from "react";
import Sidebar from "../Navigation/Sidebar";
import classes from "./Layout.module.scss";
import TopBar from "../Navigation/TopBar";
import { connect } from "react-redux";
import * as actions from "../../actions/userActions";
import jwt from "jsonwebtoken";
import { parseCookies, destroyCookie } from "nookies";

function Layout(props) {
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
        <main>{props.children}</main>
      </div>
    </div>
  );
}

export default connect(
  state => state,
  actions
)(Layout);
