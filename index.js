const next = require("next");
const express = require("express");
const app = express();
const socketIo = require("socket.io");
const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server-express");
const { formatError, isInstance } = require("apollo-errors");
const multer = require("multer");
const cookieParser = require("cookie-parser");

const typeDefs = require("./graphql/rootSchema");
const resolvers = require("./graphql/resolvers/rootResolvers");
const isAuth = require("./middlewares/is-auth");
const ioUtils = require("./lib/io-utils");

const port = process.env.NODE_ENV === "dev-preview" ? 80 : 8080;
const dev = process.env.NODE_ENV !== "dev-preview";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

function customFormatError(error) {
  const { originalError } = error;

  if (isInstance(originalError)) {
    console.log({
      type: originalError.name,
      date: originalError.time_thrown,
      internalData: originalError.internalData
    });
  }
  return formatError(error);
}

app.use(isAuth);

app.use(multer().single("profilePicture"));

app.use(cookieParser());

app.use(express.static("static"));

const gqlServer = new ApolloServer({
  typeDefs,
  resolvers,
  formatError: customFormatError,
  context: ({ req }) => req
});
gqlServer.applyMiddleware({ app });

nextApp
  .prepare()
  .then(() => {
    const server = app.listen(port, async err => {
      if (err) throw err;

      mongoose.set("useFindAndModify", false);
      mongoose.set("useCreateIndex", true);

      await mongoose.connect(
        "mongodb://lobbia-test:lobbia123@ds137605.mlab.com:37605/lobbia-dev-cluster",
        { useNewUrlParser: true },
        err => {
          if (err) throw err;
          console.log(`\n ️> \x1b[4m\x1b[32mConnected to DB\x1b[0m`);
        }
      );

      const io = socketIo(server);

      let status;

      io.on("connection", socket => {
        socket.emit("sendData");

        socket.user = { id: "" };

        socket.on("userData", data => {
          ioUtils.setActivityStatus(data.id, true);
          socket.user.id = data.id;
          socket.emit("refetchUserData");
        });

        socket.on("disconnect", () => {
          ioUtils.setActivityStatus(socket.user.id, false);
        });
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
