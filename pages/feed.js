import React, { Component } from "react";
import Layout from "../components/Layout/Layout";
import "../config/sass/global.scss";
import io from "socket.io-client";
import classes from "./styles/Page.module.scss";
import UserContainer from "../lib/UserContainer";
import { Subscribe } from "unstated";
import { destroyCookie } from "nookies";
import Router from "next/router";

const socket = io();

class Feed extends Component {
  state = {
    id: "",
    token: ""
  };

  componentDidMount() {
    this.setState({
      id: localStorage.getItem("id"),
      token: localStorage.getItem("token")
    });
  }

  render() {
    const { pageProps } = this.props;

    return (
      <>
        <Subscribe to={[UserContainer]}>
          {user => {
            // user.getProfileData(this.state.id, this.state.token);
            return (
              <Layout
                {...pageProps}
                logout={() => {
                  destroyCookie({}, "token");
                  Router.push("/login");
                }}
                user={{
                  ...this.props.user
                }}
              >
                <div className={classes.main} />
              </Layout>
            );
          }}
        </Subscribe>
      </>
    );
  }
}

Feed.getInitialProps = ({ req }) => {
  return {
    pageProps: {
      req
    }
  };
};

export default Feed;
