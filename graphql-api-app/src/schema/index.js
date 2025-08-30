import { gql } from 'apollo-server';

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
  }

  type Transfer {
    id: ID!
    from: ID!
    to: ID!
    amount: Float!
    timestamp: String!
  }

  type Query {
    getUsers: [User!]!
  }

  type Mutation {
    registerUser(username: String!, email: String!): User!
    loginUser(username: String!, email: String!): String! # Returns a token
    transferValue(from: ID!, to: ID!, amount: Float!): Transfer!
  }
`;

const resolvers = {
  Query: {
    getUsers: async (_, __, { dataSources }) => {
      return await dataSources.userRepository.findAllUsers();
    },
  },
  Mutation: {
    registerUser: async (_, { username, email }, { dataSources }) => {
      return await dataSources.authService.createUser(username, email);
    },
    loginUser: async (_, { username, email }, { dataSources }) => {
      return await dataSources.authService.validateUser(username, email);
    },
    transferValue: async (_, { from, to, amount }, { dataSources }) => {
      return await dataSources.transferService.validateTransfer(from, to, amount);
    },
  },
};

export { typeDefs, resolvers };