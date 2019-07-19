import React, { Component } from "react";
import RouterLink from "next/link";
import Router from "next/router";
import Particles from "react-particles-js";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import {
  Grid,
  Snackbar,
  TextField,
  Typography,
  Button,
  Link,
  Chip,
  IconButton,
  SnackbarContent,
  Avatar
} from "@material-ui/core";

import classes from "./styles/AuthForms.module.scss";
import genres from "../config/music_genres.json";
import games from "../config/games.json";

const marginTop = {
  marginTop: "20px"
};

const createUserAccount = gql`
  mutation(
    $email: String
    $fullName: String
    $username: String
    $dateOfBirth: DateTime
    $password: String
    $musicInterests: [Int]
    $gamesInterests: [Int]
  ) {
    createUserAccount(
      email: $email
      musicInterests: $musicInterests
      gamesInterests: $gamesInterests
      fullName: $fullName
      username: $username
      dateOfBirth: $dateOfBirth
      password: $password
    ) {
      token
      id
    }
  }
`;

const validateFormCredentials = gql`
  mutation(
    $fullName: String
    $username: String
    $password: String
    $email: String
  ) {
    validateFormCredentials(
      fullName: $fullName
      username: $username
      password: $password
      email: $email
    )
  }
`;

const initialInterestsState = {
  music: {},
  games: {}
};

Object.keys(genres).map(key => {
  initialInterestsState.music[key] = {
    id: key,
    name: genres[key],
    isSelected: false
  };
});

Object.keys(games).map(key => {
  initialInterestsState.games[key] = {
    id: key,
    name: games[key],
    isSelected: false
  };
});

function GameCheck({ picture, stateField, clicked }) {
  let customClasses = [classes.gameCheck];
  if (stateField) customClasses.push(classes.gameCheck_selected);

  return (
    <div
      className={customClasses.join(" ")}
      onClick={clicked}
      style={{
        background: `url(${picture})`,
        backgroundSize: `cover`
      }}
    >
      <div>
        <div>
          <i className="fas fa-check" />
        </div>
      </div>
    </div>
  );
}

function GenreCheck({ name, stateField, clicked }) {
  return (
    <Chip
      className={classes.genreCheck}
      label={name}
      variant={stateField ? "default" : "outlined"}
      color="primary"
      avatar={<Avatar><i className="fas fa-music" /></Avatar>}
      onClick={clicked}
    />
  );
}

function getFormattedDate(date) {
  var year = date.getFullYear();

  var month = (1 + date.getMonth()).toString();
  month = month.length > 1 ? month : "0" + month;

  var day = date.getDate().toString();
  day = day.length > 1 ? day : "0" + day;

  return year + "-" + month + "-" + day;
}

function getTimestamp(myDate) {
  myDate = myDate.split("-");
  var newDate = myDate[1] + "/" + myDate[2] + "/" + myDate[0];
  return new Date(newDate).toISOString();
}

class Register extends Component {
  state = {
    isAuthSuccessful: false,

    formStage: 2,
    formValidation: {
      logLevel: "",
      isValidated: true,

      displayMessage: ""
    },

    interestFields: initialInterestsState,
    formFields: {
      fullName: {
        value: ""
      },

      username: {
        value: ""
      },

      email: {
        value: ""
      },

      birthday: {
        value: getFormattedDate(new Date())
      },

      password: {
        value: ""
      }
    }
  };

  handleDateChange = e => {
    this.setState({ birthday: e.target.value });
  };

  formForward = () => {
    this.setState(prevState => ({ formStage: prevState.formStage + 1 }));
  };

  formBackward = () => {
    this.setState(prevState => ({ formStage: prevState.formStage - 1 }));
  };

  selectField = (type, field) => {
    this.setState(prevState => ({
      ...prevState,
      isSecondFormUsed: true,
      interestFields: {
        ...prevState.interestFields,
        [type]: {
          ...prevState.interestFields[type],
          [field]: {
            ...prevState.interestFields[type][field],
            isSelected: !prevState.interestFields[type][field].isSelected
          }
        }
      }
    }));
  };

  handleChange = (e, type) => {
    e.persist();
    this.setState(prevState => ({
      formFields: {
        ...prevState.formFields,
        [type]: {
          ...prevState.formFields[type],
          value: e.target.value
        }
      }
    }));
  };

  render() {
    const formFieldsArr = [];
    for (let key in this.state.formFields) {
      formFieldsArr.push({
        name: key,
        ...this.state.formFields[key]
      });
    }

    const firstStepRegistration = (
      <Grid
        className={classes.grid}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Typography
          style={{
            margin: "10 0 20 0"
          }}
          variant="h4"
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
          {formFieldsArr.map(el => {
            let placeholderText =
              el.name.charAt(0).toUpperCase() + el.name.slice(1);

            let helperText = "";

            let type = "text";

            if (el.name === "password") {
              helperText =
                "*Password should be at least 8 characters long with one uppercase and at least one number";
              type = "password";
            }
            if (el.name === "email") {
              helperText = "Please provide a valid email";
              type = "email";
            }

            if (el.name === "birthday") type = "date";

            if (el.name === "fullName") placeholderText = "Full name";

            return (
              <TextField
                key={el.name}
                fullWidth
                variant="filled"
                helperText={helperText}
                label={placeholderText}
                style={marginTop}
                type={type}
                onChange={e => this.handleChange(e, el.name)}
                value={this.state.formFields[el.name].value}
              />
            );
          })}
        </Grid>
        <Mutation
          onCompleted={data => {
            if (data.validateFormCredentials) this.formForward();
            if (!data.validateFormCredentials)
              this.setState(prevState => ({
                ...prevState,
                formValidation: {
                  ...prevState.formValidation,
                  isValidated: false,
                  logLevel: "warning",

                  displayMessage: "Invalid credentials, please try again."
                }
              }));
          }}
          onError={({ graphQLErrors }) => {
            this.setState(prevState => ({
              ...prevState,
              formValidation: {
                ...prevState.formValidation,
                isValidated: false,
                logLevel: "danger",

                displayMessage:
                  graphQLErrors[0].extensions.exception.data.message
              }
            }));
          }}
          mutation={validateFormCredentials}
          variables={{
            email: this.state.formFields.email.value,
            password: this.state.formFields.password.value,
            fullName: this.state.formFields.fullName.value,
            username: this.state.formFields.username.value
          }}
        >
          {(validateFormCredentials, { data, error }) => {
            return (
              <Button
                onClick={() => validateFormCredentials()}
                variant="contained"
                color="primary"
              >
                Proceed
              </Button>
            );
          }}
        </Mutation>
        <Typography
          style={{ margin: "4px" }}
          color="textSecondary"
          variant="caption"
        >
          You already have an account?{" "}
          <RouterLink href="/login">
            <Link style={{ cursor: "pointer" }}>Sign in</Link>
          </RouterLink>
        </Typography>
      </Grid>
    );

    const gamesFieldsArr = [];

    for (let key in this.state.interestFields.games) {
      gamesFieldsArr.push(this.state.interestFields.games[key]);
    }

    const musicFieldsArr = [];

    for (let key in this.state.interestFields.music) {
      musicFieldsArr.push(this.state.interestFields.music[key]);
    }

    const { interestFields } = this.state;
    const { games, music } = interestFields;

    // picking selected games
    const selectedGames = [];
    for (let field in games) {
      if (games[field].isSelected) selectedGames.push(parseInt(field));
    }

    // if (this.state.formStage === 1) console.log(selectedGames);

    // picking selected music
    const selectedMusic = [];
    for (let field in music) {
      if (music[field].isSelected) selectedMusic.push(parseInt(field));
    }

    // if (this.state.formStage === 2) console.log(selectedMusic);

    const secondStepRegistration = (
      <Grid
        className={classes.grid}
        container
        direction="column"
        alignItems="center"
        justify="space-between"
      >
        <Grid container direction="column" alignItems="center">
          <Typography variant="h4" color="textPrimary">
            Which games do you play?
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            You gotta be a gamer, right?
          </Typography>
        </Grid>
        <Grid
          style={{
            flexGrow: 1,
            height: "100%"
          }}
          container
          direction="column"
          justify="space-between"
          alignItems="center"
        >
          <Grid
            style={{
              marginTop: "20px"
            }}
            container
            direction="column"
            alignItems="center"
          >
            <Typography
              style={{ alignSelf: "flex-start" }}
              variant="caption"
              color="textSecondary"
            >
              Select the one you do:
            </Typography>
            <Grid
              className={classes.scrollable}
              container
              direction="row"
              justify="center"
            >
              {gamesFieldsArr.map(el => (
                <GameCheck
                  key={el.name}
                  stateField={this.state.interestFields.games[el.id].isSelected}
                  picture="https://is4-ssl.mzstatic.com/image/thumb/Purple123/v4/b3/95/73/b3957315-51c1-19f2-767a-c2683457e019/AppIcon-0-1x_U007emarketing-0-85-220-9.png/246x0w.jpg"
                  clicked={() => this.selectField("games", el.id)}
                />
              ))}
            </Grid>
          </Grid>
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
              onClick={this.formBackward}
              variant="outlined"
              color="primary"
            >
              Back
            </Button>
            <Button
              disabled={selectedGames.length === 0}
              onClick={this.formForward}
              classes={{ root: classes.marginSides }}
              variant="contained"
              color="primary"
            >
              next
            </Button>
          </Grid>
        </Grid>
      </Grid>
    );

    let mutationVariables = null;
    if (this.state.formStage === 2) {
      const { email, fullName, password, username } = this.state.formFields;

      mutationVariables = {
        email: email.value,
        fullName: fullName.value,
        password: password.value,
        username: username.value,
        dateOfBirth: getTimestamp(this.state.formFields.birthday.value),
        gamesInterests: selectedGames,
        musicInterests: selectedMusic
      };

      console.log(mutationVariables);
    }

    const thirdStepRegistration = (
      <Mutation
        onError={({ graphQLErrors }) => {
          console.log(graphQLErrors);
        }}
        onCompleted={data => {
          localStorage.setItem("token", data.createUserAccount.token);
          localStorage.setItem("id", data.createUserAccount.id);
          Router.push("/feed");
        }}
        mutation={createUserAccount}
        variables={mutationVariables}
      >
        {createUserAccount => {
          return (
            <Grid
              className={classes.grid}
              container
              direction="column"
              alignItems="center"
              justify="space-between"
            >
              <Grid container direction="column" alignItems="center">
                <Typography variant="h4" color="textPrimary">
                  What about your music taste?
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Trap, Rock, R&B, or maybe Techno?
                </Typography>
              </Grid>
              <Grid
                style={{
                  flexGrow: 1,
                  height: "100%"
                }}
                className={classes.scrollable}
                container
                direction="row"
                justify="center"
              >
                <Grid
                  style={{
                    marginTop: "20px"
                  }}
                  container
                  direction="column"
                  alignItems="center"
                >
                  <Typography
                    style={{ alignSelf: "flex-start" }}
                    variant="caption"
                    color="textSecondary"
                  >
                    Select at least one you listen:
                  </Typography>
                  <Grid
                    container
                    direction="row"
                    alignItems="center"
                    justify="center"
                    wrap="wrap"
                  >
                    {musicFieldsArr.map(el => {
                      return (
                        <GenreCheck
                          name={el.name}
                          key={el.name}
                          stateField={
                            this.state.interestFields.music[parseInt(el.id)]
                              .isSelected
                          }
                          clicked={() => this.selectField("music", el.id)}
                        />
                      );
                    })}
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                style={{
                  width: "80%",
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
                    onClick={this.formBackward}
                    variant="outlined"
                    color="primary"
                  >
                    Back
                  </Button>
                  <Button
                    disabled={selectedMusic.length === 0}
                    classes={{ root: classes.marginSides }}
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      createUserAccount();
                    }}
                  >
                    finish
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          );
        }}
      </Mutation>
    );

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
        <div className={classes["custom-form-card"]}>
          {this.state.formStage === 0
            ? firstStepRegistration
            : this.state.formStage === 1
            ? secondStepRegistration
            : thirdStepRegistration}
        </div>
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
          open={!this.state.formValidation.isValidated}
        >
          <SnackbarContent
            className={classes[this.state.formValidation.logLevel]}
            message={
              <span className={classes.displayMessage}>
                <i
                  className={`fas fa-exclamation-circle ${
                    classes.snackbarIcon
                  }`}
                />{" "}
                {this.state.formValidation.displayMessage}
              </span>
            }
            action={
              <IconButton
                onClick={() =>
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

export default Register;
