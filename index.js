const next = require("next");
const app = require("express")();
const socketIo = require("socket.io");
const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server-express");

const graphql = require("graphql");

const typeDefs = require("./graphql/rootSchema");
const resolvers = require("./graphql/resolvers/rootResolvers");
const cfg = require("./config/config.json");

const port = process.env.PORT || cfg.port;
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

customFormatError = err => {
  if (err.originalError && err.originalError.error_message) {
    err.message = err.originalError.error_message;
  }
  return err;
};

const gqlServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => req
});
gqlServer.applyMiddleware({ app });

nextApp
  .prepare()
  .then(() => {
    const server = app.listen(port, err => {
      if (err) throw err;

      mongoose.connect(
        "mongodb+srv://lobbia-test:lobbia-test@lobbia-dev-cluster-cicwj.mongodb.net/test?retryWrites=true&w=majority",
        { useNewUrlParser: true },
        err => {
          if (!err) {
            console.log(`\n--------------------------------------`);
            console.log(`\n ✔️ \x1b[4m\x1b[32mConnected to DB\x1b[0m`);
            console.log(
              ` > \x1b[4m\x1b[36mPreview\x1b[0m: http://localhost:${port}`
            );
            console.log(
              ` > \x1b[4m\x1b[31mGraphQL\x1b[0m: http://localhost:${port}/graphql\n`
            );
          }
        }
      );

      const io = socketIo(server);

      let status;

      io.on("connection", socket => {
        status = "online";
        socket.on("disconnect", () => (status = "offline"));
      });

      app.get("*", (req, res) => {
        req.user = { status };
        return handle(req, res);
      });
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
