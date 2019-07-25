import React, { Component } from "react";
import { parseCookies } from "nookies";
import Router from "next/router";

export default C => {
  return class AuthComponent extends Component {
    componentDidMount() {
      const token = parseCookies().token;
      const isAuth = Boolean(token);

      if (!isAuth) Router.push("/login");
    }

    componentDidUpdate(prevProps, prevState) {
      const token = parseCookies().token;
      const isAuth = Boolean(token);

      if (!isAuth) Router.push("/login");
    }

    render() {
      return <C {...this.props} />;
    }
  };
};
