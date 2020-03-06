Author: Robinder Singh

This is a client side reactjs application with nodejs express graphql server
----How to Run ----

npm i

To run app and graphql both
npm run startBoth


(This uses concurrently to run both nodejs graphql server and reactjs client app simultaneously and nodemonto restart app in case of any crashes)


To run only graphql server
npm run graphqlServer


----- Technology Details -----

The client side application runs at localhost:300 which uses
React
Apollo Client
Material UI


and it connects to nodejs express graphql server running at localhost:4000/graphql

Nodejs
Express
Graphql
