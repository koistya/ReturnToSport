import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ExerciseRoutine = () => {
  const navigation = useNavigation();
  
  const data = {
    exerciseRoutine: [
      {
        id: 1,
        name: 'Quad Locks',
        description: 'Tighten your quad muscles while keeping your knee straight.',
        sets: 4,
        reps: 20,
        image: 'https://example.com/images/quad-locks.jpg',
      },
      {
        id: 2,
        name: 'Leg Lifts',
        description: 'Lift your leg while keeping your knee straight and foot flexed.',
        sets: 4,
        reps: 10,
        image: 'https://example.com/images/leg-lifts.jpg',
      },
      {
        id: 3,
        name: 'Ankle Pumps',
        description: 'Move your ankle up and down to improve blood flow and flexibility.',
        sets: 3,
        reps: 15,
        image: 'https://example.com/images/ankle-pumps.jpg',
      },
    ],
    dailyRoutine: 5,
  };

// Update handleCheckIn in the ExerciseRoutine component
const handleCheckIn = () => {
  // Your check-in logic here
  console.log('Checking in!');

  // Navigate to the WorkoutScreen component
  navigation.navigate('Workout');
};


  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Image style={styles.itemImage} source={{ uri: item.image }} />
        <View style={styles.itemTextContainer}>
          <Text style={styles.itemTitle}>{item.name}</Text>
          <Text style={styles.itemDescription}>{item.description}</Text>
          <Text style={styles.itemSetsReps}>
            Sets: {item.sets} | Reps: {item.reps}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today's Exercise</Text>
      <Text style={styles.dailyRoutine}>Perform {data.dailyRoutine} times daily</Text>
      <TouchableOpacity style={styles.checkInButton} onPress={handleCheckIn}>
        <Text style={styles.checkInButtonText}>Check-in Workout</Text>
      </TouchableOpacity>
      <FlatList
        data={data.exerciseRoutine}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dailyRoutine: {
    fontSize: 16,
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    marginBottom: 10,
    padding: 15,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  itemTextContainer: {
    marginLeft: 15,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 14,
    marginTop: 5,
  },
  itemSetsReps: {
    fontSize: 14,
    marginTop: 10,
    color: '#333',
  },
  checkInButton: {
    backgroundColor: '#2196F3',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  checkInButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default ExerciseRoutine;
