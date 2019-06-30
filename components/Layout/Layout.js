import React from "react";
import Navbar from "../Navbar/Navbar";

function Layout(props) {
  return <div id="Root">
      <Navbar />
      <div id="Main">{props.children}</div>;
    </div>
}

export default Layout;
