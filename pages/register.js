import React, { Component } from "react";
import RouterLink from "next/link";
import Particles from "react-particles-js";

import classes from "./styles/Register.module.scss";

import {
  Grid,
  Fade,
  TextField,
  Typography,
  Button,
  Link,
  Modal
} from "@material-ui/core";

const marginTop = {
  marginTop: "20px"
};

function getFormattedDate(date) {
  var year = date.getFullYear();

  var month = (1 + date.getMonth()).toString();
  month = month.length > 1 ? month : "0" + month;

  var day = date.getDate().toString();
  day = day.length > 1 ? day : "0" + day;

  return year + "-" + month + "-" + day;
}

function formSelecter({ picture, clicked }) {}

class Register extends Component {
  state = {
    fullName: "",
    birthday: getFormattedDate(new Date()),
    username: "",
    email: "",
    password: "",
    showNextForm: true,
    game: "",
    music: ""
  };

  handleDateChange = e => {
    this.setState({ birthday: e.target.value });
    console.log(this.state);
  };

  toggleFormState = () => {
    this.setState(prevState => ({ showNextForm: !prevState.showNextForm }));
  };

  handleChange = (e, type) => {
    this.setState({
      [type]: e.target.value
    });
  };

  render() {
    const secondStepRegistration = (
      <Fade timeout={500} in={this.state.showNextForm}>
        <Grid
          className={classes.grid}
          container
          direction="column"
          alignItems="center"
          justify="space-between"
        >
          <Grid container direction="column" alignItems="center">
            <Typography variant="h4" color="textPrimary">
              You are few steps away
            </Typography>

            <Typography variant="subtitle2" color="textSecondary">
              We just need a bit more info
            </Typography>
          </Grid>

          <Grid
            style={{
              width: "60%",
              marginBottom: "20px"
            }}
            container
            direction="column"
            alignItems="center"
            justify="space-between"
          >
            <Grid container direction="row" justify="center">
              <Button
                className={classes.marginSides}
                onClick={this.toggleFormState}
                variant="outlined"
                color="primary"
              >
                Back
              </Button>
              <Button
                classes={{ root: classes.marginSides }}
                onClick={this.toggleFormState}
                variant="contained"
                color="primary"
              >
                Finish
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Fade>
    );

    const { showNextForm } = this.state;
    return (
      <>
        <Particles
          params={{
            particles: {
              number: {
                value: 60
              }
            }
          }}
          className={classes["bg-img"]}
        />
        <div className={classes.customSignupCard}>
          {showNextForm ? (
            secondStepRegistration
          ) : (
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Typography
                style={{
                  margin: "10 0 20 0"
                }}
                variant="h5"
                color="textPrimary"
              >
                Create an account
              </Typography>
              <Grid
                style={{
                  width: "60%",
                  marginBottom: "20px"
                }}
                container
                direction="column"
                alignItems="center"
              >
                <TextField
                  onChange={e => this.handleChange(e, "fullname")}
                  fullWidth
                  value={this.state.fullName}
                  label="Full name"
                  style={marginTop}
                  variant="filled"
                />
                <TextField
                  classes={{ root: classes.input }}
                  onChange={this.handleDateChange}
                  fullWidth
                  label="Brithday"
                  style={marginTop}
                  variant="filled"
                  type="date"
                  spellCheck="false"
                  value={this.state.birthday}
                  autoComplete="false"
                />
                <TextField
                  onChange={e => this.handleChange(e, "username")}
                  fullWidth
                  label="Username"
                  style={marginTop}
                  value={this.state.username}
                  variant="filled"
                />
                <TextField
                  onChange={e => this.handleChange(e, "email")}
                  fullWidth
                  helperText="Be sure to enter a valid e-mail"
                  label="E-Mail"
                  value={this.state.email}
                  style={marginTop}
                  variant="filled"
                />
                <TextField
                  onChange={e => this.handleChange(e, "password")}
                  helperText="*Password should contain at least 6 characters"
                  fullWidth
                  label="Password"
                  style={marginTop}
                  variant="filled"
                  value={this.state.password}
                  type="password"
                />
              </Grid>
              <Button
                onClick={this.toggleFormState}
                variant="contained"
                color="primary"
              >
                Proceed
              </Button>
              <Typography
                style={marginTop}
                color="textSecondary"
                variant="caption"
              >
                You already have an account?{" "}
                <RouterLink href="/login">
                  <Link style={{ cursor: "pointer" }}>Sign in</Link>
                </RouterLink>
              </Typography>
            </Grid>
          )}
        </div>
      </>
    );
  }
}

export default Register;
