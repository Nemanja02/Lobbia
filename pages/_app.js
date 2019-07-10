import React, { Component } from "react";
import App, { Container } from "next/app";

export class _app extends Component {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <div>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
          rel="stylesheet"
        />
        <script src="https://kit.fontawesome.com/8d5f687edf.js" />
        <Container>
          <Component {...pageProps} />
        </Container>
      </div>
    );
  }
}

export default _app;
