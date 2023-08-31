import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Modal, TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useCheckIn } from '../contexts/CheckInContext';

const PTCheckInForm = () => {
  const { showForm, setShowForm, notes, setNotes, handleSubmit } = useCheckIn();

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons 
        name="plus-circle" 
        size={24} 
        onPress={() => setShowForm(true)} 
      />

      <Modal
        animationType="fade"
        transparent={true}
        visible={showForm}
        onRequestClose={() => setShowForm(false)}
      >
        <TouchableWithoutFeedback onPress={() => setShowForm(false)}>
          <View style={styles.modalOverlay}>
            <View style={styles.form}>
              <Text style={styles.label}>Notes:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter notes..."
                onChangeText={setNotes}
                value={notes}
              />
              <Button title="Submit Check-in" onPress={handleSubmit} />
              <Button title="Cancel" onPress={() => setShowForm(false)} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: 'center',
    paddingHorizontal: 20,
    alignItems: 'center', // center the icon
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 5,
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export default PTCheckInForm;
