module.exports = {
  sessions: (parent, args, { dataSources }, info) => {
    return dataSources.sessionAPI.getSessions(args);
  },
  sessionsById: (parent, { id }, { dataSources }, info) => {
    try {
      return dataSources.sessionAPI.getSessionsById(id);
    } catch {
      return {
        code: 'ERROR',
        message: 'An error occurred',
        token: 'dfdsfsdfdsfsdfsd',
      };
    }
  },
  speakers: (parent, args, { dataSources }, info) => {
    return dataSources.speakersAPI.getSpeakers();
  },
  speakersById: (parent, { id }, { dataSources }, info) => {
    return dataSources.speakersAPI.getSpeakersById(id);
  },
};
