import React from "react";
import Sidebar from "../Navigation/Sidebar";
import classes from "./Layout.module.scss";
import TopBar from "../Navigation/TopBar";
import { connect } from "react-redux";
import * as actions from "../../actions/userActions";
import jwt from "jsonwebtoken";
import { parseCookies, destroyCookie } from "nookies";

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  state = {
    isSidebarOpen: false
  };

  toggleSidebar = prevValue => this.setState({ isSidebarOpen: !prevValue });
  render() {
    return (
      <div id={classes.root}>
        <TopBar
          burgerState={this.state.isSidebarOpen}
          toggleBurgerState={this.toggleSidebar}
          logout={async () => {
            const decoded = await jwt.decode(parseCookies().token);
            this.props.logout(decoded.id);
            this.props.clearState();
            destroyCookie({}, "token");
          }}
        />
        <div className={classes.wrap}>
          <Sidebar opened={this.state.isSidebarOpen} />
          <main>{this.props.children}</main>
        </div>
      </div>
    );
  }
}

export default connect(
  state => state,
  actions
)(Layout);
