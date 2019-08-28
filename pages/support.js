import React, { Component } from "react";
import { Typography, TextField, Container } from "@material-ui/core";

import Header from "../components/Header/Header";
import Button from "../components/Button/Button";
import classes from "./styles/Index.module.scss";

export class support extends Component {
  container = {
    margin: "auto",
    width: "800px",
    maxWidth: "100%",
    padding: "20px",
    display: "flex",
    flexDirection: "column"
  };

  input = {
    marginBottom: "20px"
  };

  render() {
    return (
      <>
        <div className={classes.main}>
          <Header page="support" />
          <div style={this.container}>
            <Typography
              variant="h2"
              style={{
                color: "white",
                textAlign: "center",
                margin: "20px"
              }}
            >
              Contact support!
            </Typography>
            <Typography
              variant="body1"
              style={{
                color: "white",
                textAlign: "center",
                fontSize: "16px",
                margin: "20px"
              }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae,
              neque odio eligendi molestias non est.
            </Typography>
            <TextField
              type="text"
              variant="filled"
              id="outlined-full-width"
              label="Enter name"
              style={this.input}
            />
            <TextField
              type="email"
              variant="filled"
              id="outlined-full-width"
              label="Enter email"
              style={this.input}
            />
            <TextField
              label="Enter your feedback here!"
              variant="filled"
              multiline={true}
              rows={5}
              rowsMax={10}
              style={this.input}
            />

            <Button
              href="/support"
              primary="true"
              style={{ alignSelf: "flex-end" }}
            >
              Send feedback!
            </Button>
          </div>
        </div>
      </>
    );
  }
}

export default support;
