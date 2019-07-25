import React, { Component } from "react";
import Layout from "../components/Layout/Layout";
import "../config/sass/global.scss";
import classes from "./styles/Page.module.scss";
import * as actions from "../actions/userActions";
import { connect } from "react-redux";
import withAuth from "../lib/withAuth";

class Feed extends Component {
  componentDidMount() {
    this.props.setId(localStorage.getItem("id"));
  }

  render() {
    const { pageProps } = this.props;

    return (
      <>
        <Layout {...pageProps}>
          <div className={classes.main} />
        </Layout>
      </>
    );
  }
}

Feed.getInitialProps = ({ req }) => {
  return {
    pageProps: {
      isAuth: req.user.isAuth
    }
  };
};

export default connect(
  state => state,
  actions
)(withAuth(Feed));
