import React, { Component } from "react";
import classes from "./styles/AuthForms.module.scss";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Particles from "react-particles-js";
import RouterLink from "next/link";
import Router from "next/router";
import { connect } from "react-redux";
import * as actions from "../actions/userActions";

const validateFormCredentials = gql`
  mutation($signature: String, $password: String) {
    validateFormCredentials(signature: $signature, password: $password)
  }
`;

const loginMutation = gql`
  mutation($signature: String, $password: String) {
    login(signature: $signature, password: $password) {
      id
    }
  }
`;

import {
  Grid,
  Snackbar,
  TextField,
  Typography,
  Button,
  Link,
  IconButton,
  SnackbarContent
} from "@material-ui/core";

export class login extends Component {
  state = {
    isFormValid: false,
    loginForm: {
      signature: "",
      password: ""
    },
    error: {
      logLevel: "",
      show: false,
      message: ""
    }
  };

  handleChange = (e, field) => {
    e.persist();
    this.setState(prevState => ({
      ...prevState,
      loginForm: {
        ...prevState.loginForm,
        [field]: e.target.value
      }
    }));
  };

  handleSubmit = async (e, validateFormCredentials, login, type) => {
    if (type === "click") {
      const isFormValid = await validateFormCredentials();
      if (isFormValid) await login();
    } else if (type === "keypress") {
      if (e.keyCode == 13) {
        const isFormValid = await validateFormCredentials();
        if (isFormValid) await login();
      } else {
        return;
      }
    }
  };

  render() {
    const formFieldsArr = [];
    let type = "text";
    let helperText = "";
    for (let key in this.state.loginForm) {
      let displayName = key.charAt(0).toUpperCase() + key.slice(1);
      if (key === "signature") displayName = "Username or Email";
      if (key === "password") {
        type = "password";
        helperText = (
          <RouterLink href="/forgot-password">
            <Link style={{ cursor: "pointer" }}>Forgot your password?</Link>
          </RouterLink>
        );
      }
      formFieldsArr.push({
        value: this.state.loginForm[key],
        name: key,
        displayName,
        type,
        helperText
      });
    }

    return (
      <>
        <div className={classes["background-wrapper"]}>
          <img src="static/assets/landing-background.jpg" className={classes["bg-img"]} />
        </div>
        <div
          onKeyDown={e =>
            this.handleSubmit(
              e,
              this.validateFormCredentials,
              this.login,
              "keypress"
            )
          }
          className={classes["custom-form-card"]}
          style={{
            width: "500px",
            minHeight: "540px"
          }}
        >
          <Mutation
            onError={({ graphQLErrors }) => {
              this.setState({
                error: {
                  show: true,
                  message: graphQLErrors[0].data.message,
                  logLevel: "danger"
                }
              });
            }}
            mutation={validateFormCredentials}
            variables={{
              signature: this.state.loginForm.signature,
              password: this.state.loginForm.password
            }}
          >
            {(validateFormCredentials, { data }) => {
              this.validateFormCredentials = validateFormCredentials;
              return (
                <Grid
                  className={classes.grid}
                  container
                  direction="column"
                  alignItems="center"
                  justify="space-between"
                >
                  <Grid container direction="column" alignItems="center">
                    <Typography
                      style={{
                        justifySelf: "flex-start"
                      }}
                      variant="h4"
                      color="textPrimary"
                    >
                      Welcome back
                    </Typography>
                    <Typography
                      style={{
                        margin: "10px 0 20px 0 !important",
                        justifySelf: "flex-start"
                      }}
                      variant="subtitle2"
                      color="textSecondary"
                    >
                      It's great to see you again!
                    </Typography>
                  </Grid>
                  <Grid
                    style={{
                      width: "80%",
                      marginBottom: "20px"
                    }}
                    container
                    direction="column"
                    alignItems="center"
                  >
                    {formFieldsArr.map(el => (
                      <TextField
                        helperText={el.helperText}
                        type={el.type}
                        label={el.displayName}
                        key={el.name}
                        fullWidth
                        variant="filled"
                        style={{ marginTop: "20px" }}
                        onChange={e => this.handleChange(e, el.name)}
                      />
                    ))}
                  </Grid>
                  <Grid>
                    <Mutation
                      onCompleted={data => {
                        localStorage.setItem("id", data.login.id);
                        Router.push("/feed");
                      }}
                      variables={{
                        signature: this.state.loginForm.signature,
                        password: this.state.loginForm.password
                      }}
                      mutation={loginMutation}
                    >
                      {login => {
                        this.login = login;
                        return (
                          <Grid
                            container
                            direction="column"
                            alignItems="center"
                          >
                            <Button
                              onClick={e =>
                                this.handleSubmit(
                                  e,
                                  validateFormCredentials,
                                  login,
                                  "click"
                                )
                              }
                              variant="contained"
                              color="primary"
                            >
                              Submit
                            </Button>
                            <Typography
                              style={{ margin: "4px" }}
                              variant="caption"
                              color="textSecondary"
                            >
                              Don't have an account?{" "}
                              <RouterLink href="/register">
                                <Link style={{ cursor: "pointer" }}>
                                  Register
                                </Link>
                              </RouterLink>
                            </Typography>
                          </Grid>
                        );
                      }}
                    </Mutation>
                  </Grid>
                </Grid>
              );
            }}
          </Mutation>
        </div>
        {/* gql err snackbar */}
        <Snackbar
          autoHideDuration={3000}
          onClose={() =>
            this.setState(prevState => ({
              ...prevState,
              formValidation: {
                ...prevState.formValidation,
                isValidated: true,
                logLevel: "",

                displayMessage: ""
              }
            }))
          }
          open={this.state.error.show}
        >
          <SnackbarContent
            className={classes[this.state.error.logLevel]}
            message={
              <span className={classes.displayMessage}>
                <i
                  className={`fas fa-exclamation-circle ${
                    classes.snackbarIcon
                    }`}
                />{" "}
                {this.state.error.message}
              </span>
            }
            action={
              <IconButton
                onClick={() =>
                  this.setState(prevState => ({
                    ...prevState,
                    error: {
                      ...prevState.error,
                      show: false,
                      logLevel: "",
                      message: ""
                    }
                  }))
                }
              >
                <i className={`fas fa-times ${classes.snackbarIcon}`} />
              </IconButton>
            }
          />
        </Snackbar>
      </>
    );
  }
}

export default connect(
  null,
  actions
)(login);
