import React from "react";
import Navbar from "../components/Navigation/Sidebar";
import "../config/sass/global.scss";

export default () => {
  return (
    <>
      {/* Style imports */}
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
        rel="stylesheet"
      />
      <script src="https://kit.fontawesome.com/8d5f687edf.js" />
      <Navbar />
    </>
  );
};
