import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon';

const DailyPTRoutine = () => {
  const [quadLocksCompleted, setQuadLocksCompleted] = useState(0);
  const [legLiftsCompleted, setLegLiftsCompleted] = useState(0);
  const [explosion, setExplosion] = useState(0);

  const quadLocksTotal = 4 * 1;
  const legLiftsTotal = 4 * 1;
  const dailyTotal = 1;

  const handleQuadLocksCompletion = () => {
    if (quadLocksCompleted < quadLocksTotal * dailyTotal) {
      setQuadLocksCompleted(quadLocksCompleted + 1);
    }
  };

  const handleLegLiftsCompletion = () => {
    if (legLiftsCompleted < legLiftsTotal * dailyTotal) {
      setLegLiftsCompleted(legLiftsCompleted + 1);
    }
  };

  const checkCompletion = () => {
    if (
      quadLocksCompleted === quadLocksTotal * dailyTotal &&
      legLiftsCompleted === legLiftsTotal * dailyTotal
    ) {
      setExplosion(1);
    }
  };

  useEffect(() => {
    checkCompletion();
  }, [quadLocksCompleted, legLiftsCompleted]);

  return (
    <View style={styles.container}>
      {explosion > 0 && (
        <ConfettiCannon
          count={200}
          origin={{ x: 0, y: 0 }}
          fadeOut
          onAnimationEnd={() => setExplosion(0)}
        />
      )}
      <Text style={styles.title}>Daily Physical Therapy Routine</Text>
      <Text style={styles.instructions}>
        4 sets of 20 quad locks, 4 sets of 10 leg lifts. Do 5 times daily.
      </Text>
      <View style={styles.tasks}>
        <TouchableOpacity
          style={styles.taskButton}
          onPressIn={handleQuadLocksCompletion}>
          <Text style={styles.taskText}>
            Quad Locks: {quadLocksCompleted}/{quadLocksTotal * dailyTotal}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.taskButton}
          onPressIn={handleLegLiftsCompletion}>
          <Text style={styles.taskText}>
            Leg Lifts: {legLiftsCompleted}/{legLiftsTotal * dailyTotal}
          </Text>
        </TouchableOpacity>
      </View>
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
    instructions: {
      fontSize: 16,
      marginBottom: 20,
    },
    tasks: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    taskButton: {
      backgroundColor: '#2196F3',
      borderRadius: 5,
      padding: 10,
      minWidth: 120,
    },
    taskText: {
      color: '#FFF',
      textAlign: 'center',
    },
  });
  
  export default DailyPTRoutine