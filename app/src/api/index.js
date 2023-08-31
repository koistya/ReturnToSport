import gql from 'graphql-tag';

export const ADD_CHECKIN_MUTATION = gql`
  mutation AddCheckIn($input: CheckInInput!) {
    addCheckIn(input: $input) {
      id
      user_id
      checkin_time
      notes
    }
  }
`;

export const DAILY_CHECKINS_QUERY = gql`
  query DailyCheckIns($date: String!) {
    dailyCheckIns(date: $date) {
      user {
        id
        username
        email
        avatarUrl
        name
      }
      checkInCount
    }
  }
`;