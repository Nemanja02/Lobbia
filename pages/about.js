import React, { Component } from "react";
import classes from "./styles/Index.module.scss";
import Header from "../components/Header/Header";

export class about extends Component {
  render() {
    return (
      <>
        <div className={classes.main}>
          <Header page="about" />
        </div>
      </>
    );
  }
}

export default about;
