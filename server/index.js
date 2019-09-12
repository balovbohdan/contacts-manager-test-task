const {ApolloServer} = require('apollo-server');

const typeDefs = require('./type-defs');
const resolvers = require('./resolvers');

const port = 8080;
const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port })
    .then(({url}) => console.log(`🚀  Server is running at ${url}`));