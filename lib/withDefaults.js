import React, { Component } from "react";
import { parseCookies } from "nookies";
import Router from "next/router";
import { connect } from "react-redux";
import jwt from "jsonwebtoken";
import io from "socket.io-client";
import { bindActionCreators } from "redux";

import * as pathActions from "../actions/pathActions";
import * as userActions from "../actions/userActions";

const mapDispatchToProps = dispatch => ({
  pathActions: bindActionCreators(pathActions, dispatch),
  userActions: bindActionCreators(userActions, dispatch)
});

export default C =>
  connect(
    state => state,
    mapDispatchToProps
  )(
    class AuthComponent extends Component {
      componentDidMount() {
        const token = parseCookies().token;
        const isAuth = Boolean(token);

        if (!isAuth) {
          Router.push("/login");
          return;
        }

        const { id } = jwt.decode(token);

        const fetchData = async () => {
          const decoded = await jwt.decode(parseCookies().token);
          if (decoded) if (decoded.id) this.props.userActions.setId(decoded.id);
        };

        this.props.pathActions.setPath(Router.route);

        const urlString = Router.route.split("/");
        let pageTitle =
          urlString[1].charAt(0).toUpperCase() + urlString[1].slice(1);
        let documentTitle = `${pageTitle} | Lobbia`;
        document.title = documentTitle;

        const client = io();

        client.on("sendData", () =>
          client.emit("userData", {
            id,
            isOnline: true
          })
        );

        client.on("refetchUserData", () => fetchData());
      }

      componentDidUpdate() {
        const token = parseCookies().token;
        const isAuth = Boolean(token);

        if (!isAuth) Router.push("/login");
      }

      render() {
        return <C {...this.props} />;
      }
    }
  );
