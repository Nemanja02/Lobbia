import React, { Component } from "react";
import { Container } from "next/app";
import { ApolloProvider } from "react-apollo";
import "next-with-apollo";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { grey } from "@material-ui/core/colors";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import Router from "next/router";

const httpLink = createHttpLink({
  uri: "http://localhost:8080/graphql"
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ""
    }
  };
});

const client = new ApolloClient({
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
    }
  },
  palette: {
    text: {
      primary: grey[200],
      secondary: grey[500]
    },

    primary: {
      main: "#ff9a60"
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
  componentDidMount() {
    const isAuth = localStorage.getItem("token");
    if (isAuth) {
      if (Router.route === "/login" || Router.route === "/register")
        Router.push("/feed");
    }

    if (!isAuth) if (Router.route !== "/login") Router.push("/login");
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <div>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <script src="https://kit.fontawesome.com/8d5f687edf.js" />
        <Container>
          <ApolloProvider client={client}>
            <ThemeProvider theme={theme}>
              <Component {...pageProps} />
            </ThemeProvider>
          </ApolloProvider>
        </Container>
      </div>
    );
  }
}

export default _app;
