import React, { Component } from "react";
import classes from "./styles/Index.module.scss";
import Header from "../components/Header/Header";
import Support from "../components/Support/Support";
import { makeStyles } from "@material-ui/core/styles";
export class support extends Component {
  render() {
    return (
      <>
        <div className={classes.main}>
          <Header page="support" />
          <Support />
        </div>
      </>
    );
  }
}

export default support;
