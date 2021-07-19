const sessions = require('../data/sessions.json');
const { DataSource } = require('apollo-datasource');
const _ = require('lodash');

class SessionAPI extends DataSource {
  constructor() {
    super();
  }

  initialize(config) {}

  getSessions(args) {
    return _.filter(sessions, args);
  }

  getSessionsById(id) {
    return _.filter(sessions, { id: parseInt(id) })[0];
  }

  toggleFavoriteSession(id) {
    const session = _.filter(sessions, { id: parseInt(id) })[0];
    session.favorite = !session.favorite;
    return session;
  }

  addNewSession(session) {
    const newSession = { id: 15, ...session };
    sessions.push(newSession);
    return newSession;
  }
}

module.exports = SessionAPI;
