import React from "react";
import Layout from "../components/Layout/Layout";
import Typography from "../components/Typography/Typography";
import "../config/sass/global.scss";

export default () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
        rel="stylesheet"
      />
      <script src="https://kit.fontawesome.com/8d5f687edf.js" />
      <Layout />
    </>
  );
};
