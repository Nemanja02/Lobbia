import React, { Component } from "react";
import classes from "./styles/Index.module.scss";
import Header from "../components/Header/Header";
import Button from "../components/Button/Button";
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
                Prepare to explore the world of online gaming from a different
                perspective
              </p>

              <Button
                class={classes.button}
                href="/login"
                style={{ margin: "10px" }}
              >
                Log in
              </Button>
            </div>
            <img src="index/IndexBG.svg" alt="Background photo" />
          </div>
        </div>
      </>
    );
  }
}

export default index;
