import React, { useState } from 'react';
import { View, TextInput, FlatList, StyleSheet, Text } from 'react-native';

const mockGroups = [
  { id: 1, name: 'Group 1' },
  { id: 2, name: 'Community 1' },
  { id: 3, name: 'Group 2' },
  { id: 4, name: 'Community 2' },
  { id: 5, name: 'Group 3' },
];

const GroupsSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredGroups = mockGroups.filter((group) =>
    group.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderGroup = ({ item }) => (
    <View style={styles.groupContainer}>
      <Text>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        onChangeText={setSearchQuery}
        value={searchQuery}
        placeholder="Search for groups and communities..."
      />
      <FlatList
        data={filteredGroups}
        renderItem={renderGroup}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
  },
  groupContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export default GroupsSearch;
