const { ApolloServer, ApolloError, gql } = require('apollo-server');
const SessionAPI = require('./datasources/sessions');
const SpeakerAPI = require('./datasources/speakers');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const dataSources = () => ({
  sessionAPI: new SessionAPI(),
  speakersAPI: new SpeakerAPI(),
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  introspection: true,
  debug: false,
  formatError: (err) => {
    if (err.extensions.code === 'INTERNAL_SERVER_ERROR') {
      return new ApolloError('We are having some trouble', 'ERROR', {
        token: 'uniqueToken',
      });
    }

    return err;
  },
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
