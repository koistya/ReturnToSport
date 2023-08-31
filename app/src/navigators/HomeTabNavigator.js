// MainTabs.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/HomeScreen';
import FeedScreen from '../screens/FeedScreen';
import ExploreScreen from '../screens/ExploreScreen';
import MoreStackNavigator from './MoreStackNavigator';  // Ensure the path is correct based on your folder structure

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Cohorts') {
            iconName = focused ? 'newspaper-variant' : 'newspaper-variant-outline';
          } else if (route.name === 'Explore') {
            iconName = focused ? 'compass' : 'compass-outline';
          } else if (route.name === 'Account') {
            iconName = focused ? 'dots-horizontal' : 'dots-horizontal-circle-outline';
          }

          // You can return any component that you like here!
          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'white',
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      {/* <Tab.Screen name="Cohorts" component={FeedScreen} /> */}
      {/* <Tab.Screen name="Programming" component={ExploreScreen} /> */}
      {/* <Tab.Screen name="Explore" component={ExploreScreen} /> */}
      <Tab.Screen name="Account" component={MoreStackNavigator} />
    </Tab.Navigator>
  );
};
export default HomeTabNavigator;