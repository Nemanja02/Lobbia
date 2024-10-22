import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* fontsc*/}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />

          {/* Additional styles from server */}
          <link rel="stylesheet" href="/css/root.css" />

          {/* Font Awesome */}
          <script src="https://kit.fontawesome.com/8d5f687edf.js" />

          {/* UI colors */}
          <meta name="theme-color" content="#1e2024" />

          {/* Disable zoom */}

          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
