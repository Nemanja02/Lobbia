import React, { Component } from "react";
import Layout from "../components/Layout/Layout";
import Messages from "../components/Messages/Messages"
import "../config/sass/global.scss";
import io from "socket.io-client";
import classes from "./styles/Page.module.scss";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const socket = io();

class Index extends Component {
  render() {
    return (
      <>
        <Layout>
          <div className={classes.main}>
            <Messages />
          </div>
        </Layout>
      </>
    );
  }
}

export default Index;
