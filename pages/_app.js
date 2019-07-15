import React, { Component } from "react";
import App, { Container } from "next/app";
// import { ApolloClient } from "apollo-client";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { grey } from "@material-ui/core/colors";

const theme = createMuiTheme({
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

export class _app extends Component {
  static getInitialProps = ({ Component, ctx }) => {
    let pageProps = {
      user: ctx.req.user
    };

    return { pageProps };
  };

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
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </Container>
      </div>
    );
  }
}

export default _app;
