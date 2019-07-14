import React, { Component } from "react";
import "../config/sass/global.scss";
import "../components/Typography/Typography";
import classes from "./styles/Register.module.scss";
import Typography from "../components/Typography/Typography";

class Register extends Component {
  render() {
    return (
      <>
        <div className={classes.topbar}>
          <span className={classes.logo}>Lobbia</span>
        </div>
        <form>
          <Typography variant="h2" color="light">
            Register
          </Typography>

          <Typography variant="h5" color="light">
            Name
          </Typography>
          <input type="text" name="First name" placeholder="First Name" />
          <input type="text" name="Last name" placeholder="Last Name" />

          <Typography variant="h5" color="light">
            E-mail
          </Typography>
          <input type="text" name="email" placeholder="name@example.com" />

          <Typography variant="h5" color="light">
            Username
          </Typography>
          <input type="text" name="username" />

          <Typography variant="h5" color="light">
            Password
          </Typography>
          <input type="password" name="password" placeholder="Enter password" />
          <input
            type="password"
            name="passwordTest"
            placeholder="Repeat password"
          />

          <Typography variant="h5" color="light">
            Date of birth
          </Typography>
          <input type="date" name="Birth date" />

          <input type="reset" value="Reset" />
          <input type="submit" value="Register" />
        </form>
      </>
    );
  }
}

export default Register;
