import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          {/*FONTS*/}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />

          {/*Additional styles from server */}
          <link rel="stylesheet" href="/css/root.css" />

          {/*FontAwesome*/}
          <script src="https://kit.fontawesome.com/8d5f687edf.js" />
        
          {/*Brower Colors */}
          <meta name="theme-color" content="#1e2024" />
          <meta name="msapplication-navbutton-color" content="#1e2024" />

          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
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
