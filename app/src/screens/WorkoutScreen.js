// components/WorkoutScreen.js
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground
} from 'react-native';

const WorkoutScreen = () => {
  // You should replace the following example data with your exercise data
  const data = [
    {
      id: 1,
      name: 'Quad Set',
      reps: 20,
      image: 'https://i.ytimg.com/vi/AHc_JeAYiIQ/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLCjc090TI4EGg7V5YrovuxnDKSyFw',
    },
    {
      id: 2,
      name: 'Straight Leg Raise',
      reps: 10,
      image: 'https://i.ytimg.com/vi/J2EPx34eVXE/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLCEHFkqPs4_LXVDHzxrGuzgYGz2cQ',
    },
  ];

  const handleStartWorkout = () => {
    // Your start workout logic here
    console.log('Workout started!');
  };

  return (
    <View style={styles.container}>
      <View
        style={styles.header}
      >
        <View style={styles.headerTextContainer}>
            <Text style={styles.headerTitle}>Workout Title</Text>
            <Text style={styles.headerTime}>Time: 10:00 AM</Text>
            <Text style={styles.headerFocus}>Focus Area: Legs</Text>
        </View>
      </View>
      <ScrollView style={styles.exercises}>
        <Text style={styles.excerciseOverviewTitle}>Session Overview</Text>
        {data.map((exercise) => (
          <View key={exercise.id} style={styles.exerciseItem}>
            <Image style={styles.exerciseImage} source={{ uri: exercise.image }} />
            <Text style={styles.exerciseName}>{exercise.name}</Text>
            <Text style={styles.exerciseReps}>{exercise.reps} reps</Text>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.startWorkoutButton} onPress={handleStartWorkout}>
        <Text style={styles.startWorkoutButtonText}>Start PT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: '40%',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'red'
  },
  headerTextContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFF',
    backgroundColor: 'transparent',
  },
  headerTime: {
    fontSize: 14,
    color: '#FFF',
    backgroundColor: 'transparent',
  },
  headerFocus: {
    fontSize: 14,
    color: '#FFF',
    backgroundColor: 'transparent',
  },

  exercises: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  excerciseOverviewTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    backgroundColor: 'transparent',
    padding: 20
  },
  exerciseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    padding: 10,
  },
  exerciseImage: {
    width: 80,
    height: 80,
    borderRadius:10
  },
  exerciseName: {
    fontSize: 18,
    marginLeft: 15,
  },
  exerciseReps: {
    fontSize: 14,
    marginLeft: 15,
    color: '#333',
  },
  startWorkoutButton: {
    backgroundColor: '#2196F3',
    borderRadius: 5,
    padding: 10,
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    alignItems: 'center',
  },
  startWorkoutButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default WorkoutScreen;

