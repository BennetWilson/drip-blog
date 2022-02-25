const {gql} = require('apollo-server-express');
const { type } = require('os');

const typeDefs = gql`
    type User {
        _id: ID
        username: String!
        password: String!
        email: String!
    }

    type Query {
        getUsers: [User]
    }

    type Mutation {
        addUser(username: String!, password: String!, email: String!): User
    }
`;

module.exports = typeDefs;