// HomeStackNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeTabNavigator from './HomeTabNavigator';
import WorkoutScreen from '../screens/WorkoutScreen';

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainTabs" component={HomeTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Workout" component={WorkoutScreen} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
