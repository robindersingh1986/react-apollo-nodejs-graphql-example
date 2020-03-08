// import { v4 as uuidv4 } from 'uuid';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import path from 'path';
import cors from 'cors';
import rootResolver from './graphql/resolvers';
import rootSchema from './graphql/schema';
import { SERVER_HOST_URI, SERVER_HOST_PORT } from './constants';

var app = express();
app.use(cors())

app.use('/graphql', graphqlHTTP({
  schema: rootSchema,
  rootValue: rootResolver,
  graphiql: true,
}));

app.use(express.static(path.join(__dirname, '../', 'build')));
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../', 'build', 'index.html'));
});


app.listen(SERVER_HOST_PORT);
console.log(`Running NodeJs //// GraphQL API server at ${SERVER_HOST_URI}:${SERVER_HOST_PORT}`);
