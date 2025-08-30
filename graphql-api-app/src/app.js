import { ApolloServer } from 'apollo-server';
import schema from './schema/index.js';
import AuthController from './controllers/authController.js';
import UserController from './controllers/userController.js';
import TransferController from './controllers/transferController.js';

const server = new ApolloServer({
    schema,
    context: () => {
        // Add any context needed for resolvers here
        return {
            authController: new AuthController(),
            userController: new UserController(),
            transferController: new TransferController(),
        };
    },
});

export default server;