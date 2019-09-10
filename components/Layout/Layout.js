import React, { useState } from "react";
import Sidebar from "../Navigation/Sidebar";
import classes from "./Layout.module.scss";
import TopBar from "../Navigation/TopBar";
import { connect } from "react-redux";
import * as actions from "../../actions/userActions";
import jwt from "jsonwebtoken";
import { parseCookies, destroyCookie } from "nookies";
import { useGestureResponder } from "react-gesture-responder";
import { useSpring, animated } from "react-spring";

function Slider({ opened }) {
  const [{ x }, set] = useSpring(() => {
    return { x: 0 };
  });
  const { bind } = useGestureResponder({
    onStartShouldSet: () => true,
    onMove: ({ delta, xy }) => {
      set({ x: delta[0], immediate: true });
      console.log({ delta });
    },
    onRelease: ({ delta }) => {
      set({ x: 0, immediate: false });
    }
  });

  function addResistance(x) {
    const absX = Math.abs(x);

    if (absX > 150) {
      return x + (absX - 150) * 0.6 * (x < 0 ? 1 : -1);
    }

    return x;
  }

  return (
    <animated.div
      {...bind}
      style={{
        transform: x.interpolate(x => {
          return `translateX(${addResistance(x)}px)`;
        }),
        width: `100%`
      }}
    >
      <Sidebar opened={opened} />
    </animated.div>
  );
}

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
          <Slider opened={this.state.isSidebarOpen} />
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
