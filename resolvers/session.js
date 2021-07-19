const _ = require('lodash');
const { ApolloError } = require('apollo-server');

module.exports = {
  async speakers(session, args, { dataSources }, info) {
    try {
      const speakers = await dataSources.speakersAPI.getSpeakers();
      const returns = speakers.filter((speaker) => {
        return _.filter(speaker.sessions, { id: session.id }).length > 0;
      });
      return returns;
    } catch {
      return new ApolloError('Unable to get speakers', 'SPEAKERAPIERROR', {
        token: 'uniqueToken',
      });
    }
  },
};
