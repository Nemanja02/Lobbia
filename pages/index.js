import React from "react";
import Layout from "../components/Layout/Layout";
import Typography from "../components/Typography/Typography";
import Test from "../components/test/Test";
import "../config/sass/global.scss";
import io from "socket.io-client";

const socket = io();

export default () => {
  socket.on("childporn", data => {
    console.log(data.xD);
  });

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
        rel="stylesheet"
      />
      <script src="https://kit.fontawesome.com/8d5f687edf.js" />
      <Layout>
        <Test />
      </Layout>
    </>
  );
};
