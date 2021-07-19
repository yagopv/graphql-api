const { gql } = require('apollo-server');

module.exports = gql`
  type Query {
    sessions(
      id: ID
      title: String
      description: String
      startsAt: String
      endsAt: String
      room: String
      day: String
      format: String
      track: String
      level: String
    ): [Session]
    sessionsById(id: ID): SessionOrError
    speakers: [Speaker]
    speakersById(id: ID): Speaker
  }

  union SessionOrError = Session | Error

  type Error {
    code: String
    message: String
    token: String
  }

  type Mutation {
    toggleFavoriteSession(id: ID): Session
    addNewSession(session: SessionInput): Session
  }

  input SessionInput {
    id: ID
    title: String!
    description: String
    startsAt: String
    endsAt: String
    room: String
    day: String
    format: String
    level: String
    favorite: Boolean
  }

  type Speaker {
    id: ID!
    bio: String
    name: String
    sessions: [Session]
  }

  type Session {
    id: ID
    title: String!
    description: String
    startsAt: String
    endsAt: String
    room: String
    day: String
    format: String
    track: String @deprecated(reason: "This is a deprecation message")
    level: String
    favorite: Boolean
    speakers: [Speaker]
  }
`;
