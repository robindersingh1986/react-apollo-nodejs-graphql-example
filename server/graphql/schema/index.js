const { buildSchema } = require('graphql');
// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type User {
    id: String
    name: String
    email: String
    created_at: String
    error: String
  }
  type Query {
    hello: String
    human: String
    getUsers(id: String): User
    getAllUsers: [User]
  }
  type Mutation {
    addUser( id: String, name: String, email: String, created_at: String): User
  }
`);
export default schema;
