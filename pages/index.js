import React, { Component } from "react";
import Layout from "../components/Layout/Layout";
import "../config/sass/global.scss";
import io from "socket.io-client";
import classes from "./styles/Page.module.scss";
// import { graphql } from "react-apollo";
// import gql from "graphql-tag";
// import withData from "../lib/withData";

// const query = gql`
//   {
//     marjanoveUmri {
//       gameSearching
//       id
//       createdAt
//       interests {
//         music
//         games
//       }
//     }
//   }
// `;

const socket = io();

class Index extends Component {
  state = {};

  componentDidMount() {
    localStorage.setItem("status", this.props.user.status);
  }

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
