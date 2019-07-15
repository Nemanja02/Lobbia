import React, { Component } from "react";
import "../config/sass/global.scss";
import "../components/Typography/Typography";
import classes from "./styles/Register.module.scss";

import { Grid, TextField, Typography } from "@material-ui/core";

class Register extends Component {
  render() {
    return (
      <>
        <div className={classes.customSignupCard}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            style={{
              color: "#fff",
              "& *": {}
            }}
          >
            <Typography variant="h3" color="textPrimary">
              Create an account
            </Typography>
          </Grid>
        </div>
      </>
    );
  }
}

export default Register;
