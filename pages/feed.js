import React, { Component } from "react";
import Layout from "../components/Layout/Layout";
import "../config/sass/global.scss";
import classes from "./styles/Page.module.scss";
import * as actions from "../actions/userActions";
import { connect } from "react-redux";
import withAuth from "../lib/withAuth";
import { Typography } from "@material-ui/core";

class Feed extends Component {
  componentDidMount() {
    this.props.setId(localStorage.getItem("id"));
  }

  render() {
    const { pageProps } = this.props;

    return (
      <>
        <Layout {...pageProps}>
          <div className={classes.main} >
            <Typography variant="h6" color="textPrimary">Ako zelite da vidite nekoga na connections listi, idite na <a href="http://localhost:8080/graphql">http://localhost:8080/graphql</a> i pokrenite sledeci query:
            </Typography>
            <br />
            <Typography variant="caption" color="textPrimary">
              {` mutation {
  addConnection(id:<vas id iz baze> connectionId: <id nekoga koga zelite da dodate>){
    success
  }
}`}
            </Typography>
          </div>
        </Layout>
      </>
    );
  }
}

Feed.getInitialProps = ({ req }) => {
  return {
    pageProps: {
      isAuth: req.user.isAuth
    }
  };
};

export default connect(
  state => state,
  actions
)(withAuth(Feed));
