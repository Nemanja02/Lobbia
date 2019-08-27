import React, { Component } from "react";
import classes from "./Header.module.scss";
import {
  Typography,
  Button,
  TextField,
  AppBar,
  Toolbar,
  Container,
  CircularProgress
} from "@material-ui/core";
export class About extends Component {
  render() {
    return (
      <Container maxWidth="md" fixed>
        <Typography
          variant="h2"
          style={{ color: "white", textAlign: "center" }}
        >
          Contact support!
        </Typography>
        <br />
        <Typography
          variant="body1"
          style={{ color: "white", textAlign: "center", fontSize: "16px" }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae,
          neque odio eligendi molestias non est.
        </Typography>
        <br />
        <br />
        <TextField
          type="text"
          variant="filled"
          id="outlined-full-width"
          style={{ width: "100%" }}
          label="Enter name"
        ></TextField>
        <br />
        <br />
        <TextField
          type="email"
          variant="filled"
          id="outlined-full-width"
          style={{ width: "100%" }}
          label="Enter email"
        ></TextField>

        <br />
        <br />
        <TextField
          label="Enter your feedback here!"
          variant="filled"
          multiline={true}
          rows={5}
          rowsMax={5}
          style={{ width: "100%" }}
        />
        <br />
        <br />
        <div className={classes.buttons}>
          <from>
            <button
              type="submit"
              className={`${classes.primary} ${classes.button}`}
            >
              Send feedback!
            </button>
          </from>
        </div>
      </Container>
    );
  }
}

export default About;
