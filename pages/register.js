import React, { Component } from "react";
import RouterLink from "next/link";
import Particles from "react-particles-js";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

import classes from "./styles/Register.module.scss";

import { Grid, TextField, Typography, Button, Link, Chip } from "@material-ui/core";

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
    <div
      className={customClasses.join(" ")}
    >
      <Chip label={name} onClick={clicked}/>
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
    birthday: getFormattedDate(new Date()),

    formStage: 0,
    isFirstFormValid: false,
    isSecondFormValid: false,
    isThirdFormValid: false,

    formFields: {
      fullName: {
        value: "",
        isValid: false
      },

      username: {
        value: "",
        isValid: false
      },

      email: {
        value: "",
        isValid: false
      },

      password: {
        value: "",
        isValid: false
      }
    },

    interestFields: {
      games: {
        minecraft: false,
        pubg: false,
        lol: false,
        apex: false,
        csgo: false
      },
      music: {
        punk: false,
        metal: false,
        trap: false,
        house: false,
        rap: false
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
    Object.keys(this.state.formFields).map(key => {
      if (this.state.formFields[key].isValid === true)
        this.setState({ isFirstFormValid: true });
    });

    Object.keys(this.state.interestFields.games).map(key => {
      if (this.state.interestFields.games[key])
        this.setState({ isSecondFormValid: true });
    });

    Object.keys(this.state.interestFields.music).map(key => {
      if (this.state.interestFields.music[key])
        this.setState({ isSecondFormValid: true });
    });

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
          <TextField
            onChange={e => this.handleChange(e, "fullName")}
            fullWidth
            value={this.state.formFields.fullName.value}
            label="Full name"
            style={marginTop}
            variant="filled"
          />
          <TextField
            onChange={e => this.handleChange(e, "username")}
            fullWidth
            label="Username"
            style={marginTop}
            value={this.state.formFields.username.value}
            variant="filled"
          />
          <TextField
            onChange={e => this.handleChange(e, "email")}
            fullWidth
            helperText="Be sure to enter a valid e-mail"
            label="E-Mail"
            value={this.state.formFields.email.value}
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
            onChange={e => this.handleChange(e, "password")}
            helperText="*Password should contain at least 6 characters"
            fullWidth
            label="Password"
            style={marginTop}
            variant="filled"
            value={this.state.formFields.password.value}
            type="password"
          />
        </Grid>
        <Button onClick={this.formForward} variant="contained" color="primary">
          Proceed
        </Button>
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

    const { email, fullName, password, username } = this.state.formFields;
    const { interestFields } = this.state;

    const gamesInterests = [];

    Object.keys(interestFields.games).map(key => {
      if (key === true) this.setState({ isSecondFormValid: true });
    });

    const mutationVariables = {
      email: email.value,
      fullName: fullName.value,
      password: password.value,
      username: username.value,
      dateOfBirth: new Date(this.state.birthday).getTime()
    };

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
                    <GenreCheck name="rock"/>
                    <GenreCheck name="rock"/>
                    <GenreCheck name="rock"/>
                    <GenreCheck name="rock"/>
                    <GenreCheck name="rock"/>
                    <GenreCheck name="rock"/>
                    <GenreCheck name="rock"/>
                    <GenreCheck name="rock"/>
                    <GenreCheck name="rock"/>
                    <GenreCheck name="rock"/>
                    <GenreCheck name="rock"/>
                    <GenreCheck name="rock"/>
                    <GenreCheck name="rock"/>
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
      </>
    );
  }
}

export default Register;
