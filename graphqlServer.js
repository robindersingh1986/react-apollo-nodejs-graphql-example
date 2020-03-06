// import { v4 as uuidv4 } from 'uuid';
var uuidv4 = require('uuid/v4');
var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');
var cors = require('cors')

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
type User {
  id: String
  name: String
  email: String
  created_at: String
}

  type Query {
    hello: String
  }
  type Mutation {
    addUser( id: String, name: String, email: String, created_at: String): User
  }
`);

// addUser(name: String!, email: String!){
//   addUser(name: $name, email: $email){
//     id
//     name
//     email
//     created_at
//   }
// }


// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!';
  },
  addUser: ({id, name, email, created_at}) => {
    id = uuidv4();
    const dt = new Date();
    created_at = dt.getTime()
    return {id, name, email, created_at}
  }
  // addUser: (id,
  //   name,
  //   email,
  //   created_at) => {
  //   return {
  //     id,
  //     name,
  //     email,
  //     created_at
  //   }
  // }
  // getCharacters: () => {
  //   characters {
  //     results {
  //       id
  //       name
  //       image
  //     }
  //   }
  // }
};

var app = express();
app.use(cors())

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');