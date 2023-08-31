import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

const CHECKIN_QUERY = gql`
  query CheckIn($date: String!) {
    checkIn(date: $date) {
      id
      user_id
      user {
        id
        username
        email
        avatarUrl
        name
      }
      checkin_time
      notes
    }
  }
`;


const PTCheckInsCard = () => {
  const today = new Date().toISOString().split('T')[0];

  const { loading, error, data } = useQuery(CHECKIN_QUERY, {
    variables: { date: today }
  });


  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  // Assuming the structure of checkIn matches the checkInsData prop structure
  const checkInsData = data.checkIn;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Accountability</Text>
      <Text style={styles.subtitle}>Your cohort is working hard</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    margin: 10,
    width: Dimensions.get('window').width - 40,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  checkInItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkInCount: {
    fontSize: 16,
  },
  avatarGroup: {
    flexDirection: 'row',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginLeft: -5,
    backgroundColor: 'red'
  },
});

export default PTCheckInsCard;
