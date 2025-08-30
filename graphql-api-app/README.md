# GraphQL API Project

This project is a GraphQL API built with JavaScript and Apollo Server that allows user login, registration, user queries, and value transfers. It is structured into controllers, services, and repositories to maintain a clean architecture.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Functionality](#functionality)
- [License](#license)

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd graphql-api-app
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Start the server:
   ```
   npm start
   ```

## Usage

You can interact with the API using tools like Postman or GraphQL Playground. The server will be running on `http://localhost:4000`.

## API Endpoints

### User Registration
- **Mutation**: `registerUser`
- **Input**: `username`, `password`
- **Description**: Registers a new user. Returns an error if the username already exists.

### User Login
- **Mutation**: `loginUser`
- **Input**: `username`, `password`
- **Description**: Authenticates a user and returns a token.

### Get Users
- **Query**: `getUsers`
- **Description**: Retrieves a list of all registered users.

### Value Transfer
- **Mutation**: `transferValue`
- **Input**: `fromUser`, `toUser`, `amount`
- **Description**: Transfers a specified amount from one user to another. Transfers over R$ 5.000,00 can only be made to favored recipients.

## Functionality

- **User Registration**: Prevents duplicate registrations.
- **User Login**: Validates user credentials.
- **User Queries**: Allows retrieval of user information.
- **Value Transfers**: Enforces transfer limits based on specified rules.

## License

This project is licensed under the MIT License.