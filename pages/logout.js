import { Component } from "react";
import { destroyCookie } from "nookies";
import redirect from "../lib/redirect";

export class logout extends Component {
  static async getInitialProps(ctx) {
    destroyCookie(ctx, "token");

    redirect(ctx, "/login");

    return {};
  }

  render() {
    return null;
  }
}

export default logout;
