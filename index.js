const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const cfg = require("./config/config.json");

const app = next({
  dev
});
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(cfg.port, err => {
      if (err) throw err;
      console.log(
        "\n\t\t\x1b[46m%s\x1b[0m\n",
        `Server running on http://localhost:${cfg.port}`
      );
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
