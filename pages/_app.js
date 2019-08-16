import React, { Component } from "react";
import { Container } from "next/app";
import Router from "next/router";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { grey } from "@material-ui/core/colors";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { ApolloProvider } from "react-apollo";
import "next-with-apollo";
import io from "socket.io-client";
import { setContext } from "apollo-link-context";
import { parseCookies } from "nookies";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import initStore from "../lib/initStore";

const httpLink = createHttpLink({
  uri: "http://localhost:8080/graphql"
});

const authLink = setContext((_, { headers }) => {
  const token = parseCookies().token;
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ""
    }
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

const theme = createMuiTheme({
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: "12px",
        fontWeight: "400"
      }
    },
  },

  palette: {
    text: {
      primary: grey[200],
      secondary: grey[500],
    },

    action: {
      active: grey[400],
      disabled: grey[700],
    },

    background: {
      paper: "#1e2024",
      default: "#32393d"
    },

    primary: {
      main: "#ff9a60",
    },
    secondary: {
      main: "#3b84c0"
    },
    error: {
      main: "#c03b3b"
    }
  }
});

Router.events.on("routeChangeComplete", () => {
  if (process.env.NODE_ENV !== "production") {
    const els = document.querySelectorAll(
      'link[href*="/_next/static/css/styles.chunk.css"]'
    );
    const timestamp = new Date().valueOf();
    els[0].href = "/_next/static/css/styles.chunk.css?v=" + timestamp;
  }
});

export class _app extends Component {

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Container>
        <ApolloProvider client={client}>
          <Provider store={store}>
            <ThemeProvider theme={theme}>
              <Component {...pageProps} />
            </ThemeProvider>
          </Provider>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withRedux(initStore)(_app);
