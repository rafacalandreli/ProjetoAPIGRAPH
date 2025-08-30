const { ApolloServer } = require('apollo-server');
const schema = require('./schema/index');
const authController = require('./controllers/authController');
const userController = require('./controllers/userController');
const transferController = require('./controllers/transferController');

const server = new ApolloServer({
    schema,
    context: ({ req }) => {
        // Add any context needed for resolvers here
        return {
            authController: new authController(),
            userController: new userController(),
            transferController: new transferController(),
        };
    },
});

module.exports = server;