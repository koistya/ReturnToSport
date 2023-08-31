import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useDailyCheckIns } from '../contexts/DailyCheckInsContext';

const DailyCheckInsCard = () => {
  const { loading, error, data, updateDailyCheckIns } = useDailyCheckIns();

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  const dailyCheckInsData = data.dailyCheckIns;

  // Empty State
  if (dailyCheckInsData.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>No Check-Ins Today</Text>
        <Text style={styles.subtitle}>It seems no one has checked in today. Let's motivate the team!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today's Check-Ins</Text>
      {dailyCheckInsData.map(checkIn => (
        <View key={checkIn.user.id} style={styles.checkInItem}>
          <Image source={{ uri: checkIn.user.avatarUrl }} style={styles.avatar} />
          <Text style={styles.username}>{checkIn.user.username}</Text>
          <Text style={styles.checkInCount}>{checkIn.checkInCount} times</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
  },
  checkInItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    flex: 1,
    fontSize: 16,
  },
  checkInCount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DailyCheckInsCard;
