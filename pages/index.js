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
              <h1>Ready to take off?</h1>
              <p>
                Prepare to explore the world of online gaming from different
                perspective
              </p>
              <a
                href="/login"
                className={`${classes.primary} ${classes.button}`}
              >
                Log in
              </a>
            </div>
            <img src="index/IndexBG.svg" />
          </div>
        </div>
      </>
    );
  }
}

export default index;
