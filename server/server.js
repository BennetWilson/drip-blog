const express = require('express');
const {ApolloServer} = require('apollo-server-express');
const path = require('path')
const {typeDefs, resolvers} = require('./schemas');

const PORT = process.env.PORT || 3001;

const db = require('./connection/config');

const app = express();

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.applyMiddleware({app});

app.use(express.urlencoded({extended:false}));
app.use(express.json());

db.once('open', () => {
    app.listen(PORT, () => {
        console.log('listening');
        console.log(`gql server: localhost:${PORT}${server.graphqlPath}`)
    })
})