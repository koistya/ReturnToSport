// OnboardingScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OnboardingScreen = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  const completeOnboarding = async () => {
    try {
      await AsyncStorage.setItem('onboardingCompleted', 'true');
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Onboarding</Text>
      <Text style={styles.label}>When was your Surgery Date?</Text>
      <TouchableOpacity onPress={showDatepicker} style={styles.datePickerButton}>
        <Text style={styles.datePickerText}>{date.toLocaleDateString()}</Text>
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}
      <TouchableOpacity style={styles.button} onPress={completeOnboarding}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  datePickerButton: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 24,
  },
  datePickerText: {
    fontSize: 16,
  },
  button: {
    backgroundColor: '#6200ee',
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 4,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default OnboardingScreen;
