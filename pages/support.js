import React, { Component } from "react";
import { Typography, TextField, Container } from "@material-ui/core";

import Header from "../components/Header/Header";
import Button from "../components/Button/Button";
import classes from "./styles/Index.module.scss";

export class support extends Component {
  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.name = React.createRef();
    this.email = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    // Explicitly focus the text input using the raw DOM API
    // Note: we're accessing "current" to get the DOM node
    this.name.current.focus();
    console.log("woooo");
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
                  inputRef={this[el]}
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
            />

            <Button
              click={this.focusTextInput}
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
