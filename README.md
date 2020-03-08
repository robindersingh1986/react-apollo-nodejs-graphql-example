Author: Robinder Singh

This is a client side reactjs application with nodejs express graphql server
----How to Run ----

npm i

To run the prod build mode
npm run prod

To run app and node / graphql / mongodb both
npm run start


(This uses concurrently to run both nodejs graphql server and reactjs client app simultaneously and nodemon to restart app in case of any crashes)


To run only node / graphql / mongodb server
npm run server


----- Technology Details -----

The client side application runs at localhost:300 which uses
React
Apollo Client
Material UI


and it connects to nodejs express graphql server running at localhost:4000/graphql

Nodejs
Express
Graphql
