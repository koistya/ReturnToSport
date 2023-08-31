import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GroupsSearch from '../components/GroupsSearch';

const Groups = () => {
  return (
    <View style={styles.container}>
      <GroupsSearch />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Add this line
  },
});

export default Groups;
