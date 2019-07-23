import React, { Component } from "react";
import Layout from "../components/Layout/Layout";
import "../config/sass/global.scss";
import classes from "./styles/Page.module.scss";
import { destroyCookie, parseCookies } from "nookies";
import Router from "next/router";
import * as actions from "../actions/userActions";
import { connect } from "react-redux";
import jwt from "jsonwebtoken";

class Feed extends Component {
  async componentDidMount() {
    const decoded = await jwt.decode(parseCookies().token);
    this.props.fetchUserData(decoded.id);
  }

  render() {
    const { pageProps } = this.props;

    return (
      <>
        <Layout
          {...pageProps}
          logout={() => {
            destroyCookie({}, "token");
            Router.push("/login");
          }}
        >
          <div className={classes.main} />
        </Layout>
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

export default connect(
  state => state,
  actions
)(Feed);
