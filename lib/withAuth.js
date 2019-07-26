import React, { Component } from "react";
import { parseCookies } from "nookies";
import Router from "next/router";
import * as pathActions from "../actions/pathActions";
import {connect} from "react-redux";

export default (C) => {
  return connect(null, pathActions)(class AuthComponent extends Component {
    componentDidMount() {
      const token = parseCookies().token;
      const isAuth = Boolean(token);

      if (!isAuth) Router.push("/login");
      console.log(this.props);
      console.log(Router.route);
      this.props.setPath(Router.route);
    }

    componentDidUpdate(prevProps, prevState) {
      const token = parseCookies().token;
      const isAuth = Boolean(token);

      if (!isAuth) Router.push("/login");
    }

    render() {
      return <C {...this.props} />;
    }
  });
};

