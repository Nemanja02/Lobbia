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
      secondary: grey[600]
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
          href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
          rel="stylesheet"
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
