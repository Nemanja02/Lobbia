import React, { Component } from "react";
import { Typography, TextField, Container } from "@material-ui/core";

import Header from "../components/Header/Header";
import Button from "../components/Button/Button";
import classes from "./styles/Index.module.scss";

export class support extends Component {
  constructor() {
    super();
    this._handleKeyPress = this._handleKeyPress.bind(this);
  }
  componentDidMount() {
    for (let x in this.refs) {
      this.refs[x].onkeypress = e => this._handleKeyPress(e, this.refs[x]);
    }
  }
  _handleKeyPress(e, field) {
    if (e.keyCode === 13) {
      e.preventDefault(); // Prevent form submission if button present
      //let next = this.refs[field.name].nextSibling;
      console.log(field.name);

      /* if (next && next.tagName === "INPUT") {
        this.refs[field.name].nextSibling.focus();
      } */
    }
  }
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
          <form style={this.container}>
            <Typography
              variant="h2"
              style={{
                color: "white",
                textAlign: "center",
                margin: "20px"
              }}
            >
              Help us out
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
              If there is any problem you have please report it here we will be
              glad to fix it
            </Typography>

            {["name", "email"].map(el => {
              return (
                <TextField
                  type="text"
                  variant="filled"
                  autoComplete={el}
                  key={el}
                  id={el}
                  name={el}
                  label={`Enter ${el}`}
                  style={this.input}
                />
              );
            })}
            <TextField
              label="Enter your feedback here!"
              variant="filled"
              multiline={true}
              rows={5}
              rowsMax={10}
              style={this.input}
              ref="feedback"
            />

            <Button
              href="/support"
              primary="true"
              style={{ alignSelf: "flex-end" }}
            >
              Send feedback!
            </Button>
          </form>
        </div>
      </>
    );
  }
}

export default support;
