const {gql} = require('apollo-server-express');
const { type } = require('os');

const typeDefs = gql`

type User{
    _id: ID!
    username: String!
    email: String
    profilePic: String
    post: [Post]
}

type Post {
    _id: ID!
    title: String
    desc: String
    photo: String
    categories: [String]
}

type Auth {
    token: ID!
    user: User
}

type Query {
    me: User
    posts: Post
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addPost(title: String!, desc: String!, photo: String, categories: [String]): User
}
`

module.exports = typeDefs