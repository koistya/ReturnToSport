const typeDefs = `#graphql
scalar DateTime

type User {
  id: ID!
  username: String!
  email: String!
  avatarUrl: String
  name: String
}


type Auth {
    token: String
    user: User!
}

input ResetPasswordInput {
    email: String!
    oldPassword: String!
    newPassword: String!
}

type Query {
    me: User!
}

type Mutation {
    signIn(input: SignInInput!): Auth!
    resetPassword(input: ResetPasswordInput!): Boolean!
    signOut: String
}

type SignInPayload {
  user: User
  accessToken: String
}

input SignInInput {
  username: String
  password: String
}

input SignUpInput {
  username: String
  password: String
  email: String
}

type SignInPayload {
  user: User
  token: String
}

type Cohort {
  id: ID!
  title: String!
  description: String
  startDate: String
  endDate: String
  month: String
  year: Int
  users: [User!]!
}


type TherapyCheckIn {
  id: ID!
  user_id: Int!
  user: User
  checkin_time: String!
  notes: String
}

type Query {
  user(id: ID!): User
  user(username: String, email: String): User
  users: [User!]!
  cohort(id: ID!): Cohort
  cohorts: [Cohort!]!
  therapyCheckinsByDate(date: String!): [TherapyCheckIn!]!
  checkIn(date: String!): [TherapyCheckIn]
}

input CheckInInput {
  notes: String
}

type Mutation {
  createUser(username: String!, email: String!, password: String!, avatarUrl: String): User!
  addCheckIn(input: CheckInInput!): TherapyCheckIn!
  signUp(username: String!, email: String!, password: String!): AuthPayload!
}

type AuthPayload {
    token: String!
    user: User!
}

type DailyCheckIns {
  user: User
  checkInCount: Int
}

type Query {
  dailyCheckIns(date: String!): [DailyCheckIns]
}
`;

export default typeDefs