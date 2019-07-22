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
import { setContext } from "apollo-link-context";
import { Provider as UnstatedProvider, Subscribe } from "unstated";
import UserContainer from "../lib/UserContainer";
import { parseCookies } from "nookies";

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
  state = {
    id: ""
  };

  static getinitialProps = async ({ Component, router, ctx }) => {
    let pageProps = {};

    if (Component.pageProps) {
      const componentProps = await Component.getinitialProps(ctx);
      console.log(componentProps);
      pageProps = {
        ...pageProps,
        ...componentProps
      };
    }

    return { pageProps };
  };

  componentDidMount() {
    const token = parseCookies().token;
    const isAuth = Boolean(token);
    const id = localStorage.getItem("id");
    if (id) this.setState({ id });

    if (isAuth) {
      if (Router.route === "/login" || Router.route === "/register")
        Router.push("/feed");
    }

    if (!isAuth) if (Router.route !== "/login") Router.push("/login");
  }

  componentDidUpdate(prevProps, prevState) {
    const token = parseCookies().token;
    const isAuth = Boolean(token);
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
              <UnstatedProvider>
                <Subscribe to={[UserContainer]}>
                  {user => {
                    // if (this.state.id) {
                    //   user.setId(this.state.id);
                    // }

                    return <Component {...pageProps} />;
                  }}
                </Subscribe>
              </UnstatedProvider>
            </ThemeProvider>
          </ApolloProvider>
        </Container>
      </div>
    );
  }
}

export default _app;
