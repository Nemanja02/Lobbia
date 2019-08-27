import React, { Component } from "react";
import { Typography, TextField, Container } from "@material-ui/core";

import Header from "../components/Header/Header";
import Button from "../components/Button/Button";
import classes from "./styles/Index.module.scss";

export class support extends Component {
  inputStyle = { width: "calc(100% - 20px)", margin: "10px" };

  render() {
    return (
      <>
        <div className={classes.main}>
          <Header page="support" />
          <Container maxWidth="md" fixed>
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
              style={this.inputStyle}
              label="Enter name"
            />
            <TextField
              type="email"
              variant="filled"
              id="outlined-full-width"
              style={this.inputStyle}
              label="Enter email"
            />
            <TextField
              label="Enter your feedback here!"
              variant="filled"
              multiline={true}
              rows={5}
              rowsMax={10}
              style={this.inputStyle}
            />

            <div className={classes.buttons}>
              <form>
                <Button
                  href="/support"
                  primary="true"
                  style={{ margin: "10px" }}
                >
                  Send feedback!
                </Button>
              </form>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default support;
