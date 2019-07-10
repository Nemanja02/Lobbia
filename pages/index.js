import React, { Component } from "react";
import Layout from "../components/Layout/Layout";
import "../config/sass/global.scss";
import io from "socket.io-client";
import classes from "./Page.module.scss";

const socket = io();

class Index extends Component {
  static getInitialProps = ({ req }) => {
    console.log(req.user);
    return {};
  };

  state = {};

  render() {
    return (
      <>
        <Layout>
          <div className={classes.main} />
        </Layout>
      </>
    );
  }
}

export default Index;
