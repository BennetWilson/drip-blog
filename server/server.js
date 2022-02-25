const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");

//require schemas folder typeDef, resolvers
const { typeDefs, resolvers } = require("./schemas");

//require any middleware like auth.js from utils
const { authMiddleware } = require("./utils/auth");

const db = require("./config/connections");

const PORT = process.env.PORT || 3001;
const app = express();

//make server object from ApolloServer
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

//apply middleware to server
server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}`);
    console.log(
      `Graphql can be fount at http://localhost:${PORT}${server.graphqlPath}`
    );
  });
});
