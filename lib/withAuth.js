import React, { Component } from "react";
import { parseCookies } from "nookies";
import Router from "next/router";
import * as pathActions from "../actions/pathActions";
import { connect } from "react-redux";

export default (C) => {
  return connect(state => state, pathActions)(class AuthComponent extends Component {
    componentDidMount() {
      const token = parseCookies().token;
      const isAuth = Boolean(token);

      if (!isAuth) Router.push("/login");
      this.props.setPath(Router.route);

      const urlString = Router.route.split('/');
      let pageTitle = urlString[1].charAt(0).toUpperCase() + urlString[1].slice(1);
      let documentTitle = `${pageTitle} | Lobbia`;
      document.title = documentTitle;

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

