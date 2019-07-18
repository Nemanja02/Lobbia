import React, { Component } from "react";
import RouterLink from "next/link";
import Particles from "react-particles-js";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import {
  Grid,
  Tooltip,
  Snackbar,
  TextField,
  Typography,
  Button,
  Link,
  IconButton,
  SnackbarContent,
  Icon
} from "@material-ui/core";

import classes from "./styles/Register.module.scss";
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
    $dateOfBirth: Date
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
  initialInterestsState.music[key] = false;
});

Object.keys(games).map(key => {
  initialInterestsState.games[key] = false;
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
  let customClasses = [classes.genreCheck];
  if (stateField) customClasses.push(classes.genreCheck_selected);

  return (
    <div className={customClasses.join(" ")}>
      <Chip label={name} onClick={clicked} />
    </div>
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

class Register extends Component {
  state = {
    formStage: 0,
    formValidation: {
      logLevel: "",
      isValidated: true,
      errorMessage: ""
    },

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
    },

    interestFields: initialInterestsState
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
    this.setState({
      interestFields: {
        [type]: {
          [field]: !prevState.interestFields[type][field]
        }
      }
    });
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
                "*Password should be at least 8 characters long with one uppercase and one special character";
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
                  errorMessage: "Invalid credentials, please try again."
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
                errorMessage: graphQLErrors[0].extensions.exception.data.message
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
            <Grid container direction="row" justify="center">
              <GameCheck
                stateField={this.state.interestFields.games.minecraft}
                clicked={() => this.selectField("games", "minecraft")}
                picture="https://apkvision.com/wp-content/uploads/2019/05/Minecraft-Trial.png"
              />
              <GameCheck
                stateField={this.state.interestFields.games.apex}
                clicked={() => this.selectField("games", "apex")}
                picture="https://www.mordeo.org/files/uploads/2019/03/Apex-Legends-4K-Ultra-HD-Mobile-Wallpaper-950x1689.jpg"
              />
              <GameCheck
                stateField={this.state.interestFields.games.lol}
                clicked={() => this.selectField("games", "lol")}
                picture="https://www.mordeo.org/files/uploads/2019/03/Apex-Legends-4K-Ultra-HD-Mobile-Wallpaper-950x1689.jpg"
              />
              <GameCheck
                stateField={this.state.interestFields.games.pubg}
                clicked={() => this.selectField("games", "pubg")}
                picture="https://images.g2a.com/newlayout/323x433/1x1x0/0017f67ada95/59e60aeaae653a34fe0e9633"
              />
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

    const { interestFields } = this.state;

    const chosedGamesInterests = [];

    Object.keys(interestFields.games).map(key => {
      if (key === true) chosedGamesInterests.push(key);
    });

    if (this.state.formStage === 1) console.log(chosedGamesInterests);

    const chosedMusicInterests = [];

    Object.keys(interestFields.games).map(key => {
      if (key === true) chosedMusicInterests.push(key);
    });

    if (this.state.formStage === 2) console.log(chosedMusicInterests);

    let mutationVariables = null;
    if (
      this.state.isFirstFormValid &&
      this.state.isSecondFormValid &&
      this.state.isThirdFormValid
    ) {
      const { email, fullName, password, username } = this.state.formFields;

      mutationVariables = {
        email: email.value,
        fullName: fullName.value,
        password: password.value,
        username: username.value,
        dateOfBirth: new Date(this.state.birthday).getTime(),
        gamesInterests: chosedGamesInterests,
        musicInterests: chosedGamesInterests
      };
    }

    const thirdStepRegistration = (
      <Mutation mutation={createUserAccount}>
        {(createUserAccount, { data, error, loading }) => {
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
                    Select the one you listen:
                  </Typography>
                  <Grid container direction="row" justify="flex-start">
                    <GenreCheck name="rock" />
                    <GenreCheck name="rock" />
                    <GenreCheck name="rock" />
                    <GenreCheck name="rock" />
                    <GenreCheck name="rock" />
                    <GenreCheck name="rock" />
                    <GenreCheck name="rock" />
                    <GenreCheck name="rock" />
                    <GenreCheck name="rock" />
                    <GenreCheck name="rock" />
                    <GenreCheck name="rock" />
                    <GenreCheck name="rock" />
                    <GenreCheck name="rock" />
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
                    classes={{ root: classes.marginSides }}
                    variant="contained"
                    color="primary"
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
        <div className={classes.customSignupCard}>
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
                errorMessage: ""
              }
            }))
          }
          open={!this.state.formValidation.isValidated}
        >
          <SnackbarContent
            className={classes[this.state.formValidation.logLevel]}
            message={
              <span className={classes.errorMessage}>
                <i
                  className={`fas fa-exclamation-circle ${
                    classes.snackbarIcon
                  }`}
                />{" "}
                {this.state.formValidation.errorMessage}
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
                      errorMessage: ""
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
