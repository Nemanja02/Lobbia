import React, { Component } from "react";
import Layout from "../components/Layout/Layout";
import "../config/sass/global.scss";
import io from "socket.io-client";

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
        <Layout>xD</Layout>
      </>
    );
  }
}

export default Index;
