import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MoreScreen from '../screens/MoreScreen';
import InviteScreen from '../screens/InviteScreen'; // Ensure you've imported the InviteScreen

const Stack = createStackNavigator();

const MoreStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="More">
      <Stack.Screen name="More" component={MoreScreen} />
      <Stack.Screen name="Invite" component={InviteScreen} />
    </Stack.Navigator>
  );
};

export default MoreStackNavigator;