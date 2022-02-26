const {gql} = require('apollo-server-express');


const typeDefs = gql`
    type User {
        _id: ID
        username: String!
        password: String!
        email: String!
    }

    type Post {
        _id: ID
        title: String!
        desc: String!
        photo: String
        categories: [Category]
    }

    type Category {
        name: String!
    }

    type Auth {
        token: ID!
        user: User
      }

    type Query {
        getUsers: [User]
        getPosts: [Post]
    }

    type Mutation {
        addUser(username: String!, password: String!, email: String!): Auth
        login(email: String!, password: String!): Auth
        addPost(title: String!, desc: String!, photo: String, categories: [String]): Post
    }
`;

module.exports = typeDefs;