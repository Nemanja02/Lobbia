import React, { Component } from "react";
import classes from "./styles/Index.module.scss";
import Header from "../components/Header/Header";
import { decorateWithLogger } from "graphql-tools";
import { getOperationDefinition } from "apollo-utilities";

export class index extends Component {
  render() {
    return (
      <>
        <div id={classes.main}>
          <Header page="home" />
          <div className={classes.content}>
            <div>
              <h1>Welcome</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <img src="index/IndexBG.svg" />
          </div>
        </div>
      </>
    );
  }
}

export default index;
