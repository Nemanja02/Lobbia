import React, { Component } from "react";
import "../components/Typography/Typography";
import classes from "./styles/Register.module.scss";

import { TextValidator } from "react-material-ui-form-validator";

import {
  Grid,
  TextField,
  Typography,
  makeStyles,
  Button,
  Modal
} from "@material-ui/core";

const childFormStyle = {
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

class Register extends Component {
  state = {
    fullName: "",
    birthday: getFormattedDate(new Date()),
    username: "",
    email: "",
    password: "",
    isModalOpen: false
  };

  handleDateChange = e => {
    this.setState({ birthday: e.target.value });
    console.log(this.state);
  };

  toggleModal = () => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
  };

  handleChange = (e, type) => {
    this.setState({
      [type]: e.target.value
    });
  };

  render() {
    return (
      <>
        <div className={classes["bg-img"]} />
        <div className={classes.customSignupCard}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Typography
              style={{
                margin: "40px 0"
              }}
              variant="h5"
              color="textPrimary"
            >
              Create an account
            </Typography>
            <Grid
              style={{
                width: "50%",
                marginBottom: "4rem"
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
                style={childFormStyle}
                variant="filled"
              />
              <TextField
                onChange={this.handleDateChange}
                fullWidth
                label="Brithday"
                style={childFormStyle}
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
                style={childFormStyle}
                value={this.state.username}
                variant="filled"
              />
              <TextField
                onChange={e => this.handleChange(e, "email")}
                fullWidth
                label="E-Mail"
                value={this.state.email}
                style={childFormStyle}
                variant="filled"
              />
              <TextField
                onChange={e => this.handleChange(e, "password")}
                helperText="*Password should contain at least 6 characters"
                fullWidth
                label="Password"
                style={childFormStyle}
                variant="filled"
                value={this.state.password}
                type="password"
              />
            </Grid>
            <Button
              onClick={this.toggleModal}
              variant="contained"
              color="primary"
            >
              Proceed
            </Button>
            <Modal
              onClose={this.toggleModal}
              draggable
              classes={{ root: classes.modalContainer }}
              open={this.state.isModalOpen}
            >
              <Grid
                container
                alignItems="center"
                direction="column"
                className={classes.modal}
              >
                <Typography variant="h6">Hey there</Typography>
              </Grid>
            </Modal>
          </Grid>
        </div>
      </>
    );
  }
}

export default Register;
