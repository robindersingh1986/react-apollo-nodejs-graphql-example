import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from 'react-apollo';
import App from './App';
// import { SERVER_HOST_URI, SERVER_HOST_PORT } from './constants';
import * as serviceWorker from './serviceWorker';
import './index.css';

const SERVER_HOST_URI = 'http://localhost';
const SERVER_HOST_PORT = '4000';

const client = new ApolloClient({
    uri: `${SERVER_HOST_URI}:${SERVER_HOST_PORT}/graphql` // URL of the GraphQL server
  });

ReactDOM.render(
<ApolloProvider client={client}>
    <App />
</ApolloProvider>,
document.getElementById("root")
);
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
