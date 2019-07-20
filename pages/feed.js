import React, { Component } from "react";
import Layout from "../components/Layout/Layout";
import FindDialog from "../components/FindDialog/FindDialog";
import "../config/sass/global.scss";
import io from "socket.io-client";
import classes from "./styles/Page.module.scss";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const socket = io();

class Index extends Component {
  state = {};

  render() {
    return (
      <>
        <Layout>
          <div className={classes.main} />
        </Layout>
        
        <FindDialog />
      </>
    );
  }
}

export default Index;
