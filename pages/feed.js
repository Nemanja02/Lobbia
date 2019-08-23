import React, { Component } from "react";
import Layout from "../components/Layout/Layout";
import "../config/sass/global.scss";
import classes from "./styles/Page.module.scss";
import * as actions from "../actions/userActions";
import { connect } from "react-redux";
import withDefaults from "../lib/withDefaults";
import { Typography } from "@material-ui/core";

class Feed extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (this.props.user.id && !this.props.user.username)
      this.props.userActions.fetchUserData(this.props.user.id);
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

export default connect(
  state => state,
  actions
)(withDefaults(Feed));
