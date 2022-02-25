const User = require('../models/User')

const resolvers = {
    Query: {
        getUsers: async () => {
            console.log('hitting this');
            return User.find();
        }
    },
    Mutation: {
        addUser: async(parent, args) => {
            const user = await User.create({username: args.username, password:args.password, email: args.email});
            return user;
        }   
    }
}

module.exports = resolvers