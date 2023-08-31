import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Clipboard from '@react-native-community/clipboard';
import * as Contacts from 'expo-contacts';
import { Linking } from 'react-native';

// Ensure you have proper permissions to send SMS if you want to send an invite via SMS

const InviteScreen = () => {
    const [contacts, setContacts] = useState([]);
    const inviteLink = "https://yourapp.com/invite?code=123456";
  
    useEffect(() => {
      // Load contacts automatically when the screen is opened
      inviteViaContacts();
    }, []);
  
    const inviteViaContacts = async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers, Contacts.Fields.Emails],
        });
        if (data.length > 0) {
          setContacts(data);
        }
      }
    };


    const sendInvite = (contact) => {
        if (contact.phoneNumbers && contact.phoneNumbers.length > 0) {
            const phoneNumber = contact.phoneNumbers[0].number;  // Using the first phone number
            const message = `Hey! I'm using this amazing app. Join me using this link: ${inviteLink}`;
            
            // Open SMS app with the message and recipient number prefilled
            Linking.openURL(`sms:${phoneNumber}?body=${message}`).catch(() => {
                alert('Failed to send SMS. Please check device permissions.');
            });
        } else {
            alert(`${contact.name} does not have a phone number saved.`);
        }
    };


  const renderContact = ({ item }) => (
    <View style={styles.row}>
      <Text>{item.name}</Text>
      <TouchableOpacity onPress={() => sendInvite(item)}>
        <Text style={styles.inviteBtn}>Invite</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Invite Friends</Text>
      <FlatList
        data={contacts}
        renderItem={renderContact}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  inviteBtn: {
    color: 'blue'
  }
});

export default InviteScreen;