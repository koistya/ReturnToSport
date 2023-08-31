import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const DailyChecklist = () => {
  const [checklist, setChecklist] = useState([
    { id: 1, task: 'First PT', completed: false, reminderTime: '09:00' },
    { id: 2, task: 'Second PT', completed: false, reminderTime: '11:00' },
    { id: 3, task: 'Third PT', completed: false, reminderTime: '13:00' },
    { id: 4, task: 'Fourth PT', completed: false, reminderTime: '15:00' },
    { id: 5, task: 'Fifth PT', completed: false, reminderTime: '17:00' },
    { id: 6, task: 'Take Meds', completed: false, reminderTime: '19:00' },
    { id: 7, task: 'Take Meds', completed: false, reminderTime: '21:00' },
  ]);

  const toggleCompleted = (id) => {
    setChecklist(
      checklist.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => toggleCompleted(item.id)}
    >
      <MaterialIcons
        name={item.completed ? 'check-box' : 'check-box-outline-blank'}
        size={24}
        color={item.completed ? '#4caf50' : '#757575'}
      />
      <Text style={[styles.itemText, item.completed ? styles.completed : {}]}>
        {item.task}
      </Text>
      <Text style={styles.itemTime}>{item.reminderTime}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today's Tasks</Text>
      <FlatList
        data={checklist}
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
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    marginBottom: 10,
    padding: 15,
  },
  completed: {
    textDecorationLine: 'line-through',
  },
  itemText: {
    fontSize: 18,
    marginLeft: 10,
  },
  itemTime: {
    fontSize: 14,
    marginLeft: 'auto',
  },
});

export default DailyChecklist;
