import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Sidebar from "../Navigation/Sidebar";
import classes from "./Layout.module.scss";
import TopBar from "../Navigation/TopBar";
import { connect } from "react-redux";
import * as actions from "../../actions/userActions";
import jwt from "jsonwebtoken";
import { parseCookies, destroyCookie } from "nookies";
import { useGestureResponder } from "react-gesture-responder";
import { useSpring, animated } from "react-spring";

function Slider({ changeState, opened }) {
  const slideArea = 20;
  const minSlide = 30;
  const [{ x }, set] = useSpring(() => {
    return { x: 0 };
  });

  const { bind } = useGestureResponder({
    onStartShouldSet: () => true,
    onMove: ({ delta }) => {
      set({ x: delta[0], immediate: true });
      console.log({ delta });
    },
    onRelease: ({ delta }) => {
      if (Math.abs(delta[0]) > minSlide) {
        console.log(delta[0]);
        changeState(opened);
        set({ x: 0, immediate: true });
      } else {
        set({ x: 0, immediate: false });
      }
    }
  });

  function addResistance(x) {
    const absX = Math.abs(x);

    if (absX > 150) {
      return x + (absX - 150) * 0.6 * (x < 0 ? 1 : -1);
    }

    return x;
  }

  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });

  var position = opened
    ? {
        transform: x.interpolate(x => {
          return `translateX(${Math.min(addResistance(x), 0)}px)`;
        })
      }
    : {
        transform: x.interpolate(x => {
          return `translateX(calc(-100% + ${slideArea} + ${addResistance(
            x
          )}px))`;
        })
      };
  return isMobile ? (
    <animated.div
      {...bind}
      style={{
        ...position,
        position: `fixed`,
        transition: `transform .2s ease-out`,
        width: `calc(100% + ${slideArea}px)`,
        height: `calc(100% - 60px)`,
        paddingRight: `${slideArea}px`
      }}
    >
      <Sidebar />
    </animated.div>
  ) : (
    <Sidebar />
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
          <Slider
            opened={this.state.isSidebarOpen}
            changeState={this.toggleSidebar}
          />
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
