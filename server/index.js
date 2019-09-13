const {ApolloServer} = require('apollo-server');

const model = require('./model');
const {port} = require('./config');
const typeDefs = require('./type-defs');
const resolvers = require('./resolvers');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: { model }
});

server.listen({ port })
    .then(({url}) => console.log(`🚀  Server is running at ${url}`));