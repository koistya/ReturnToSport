import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const mockProfile = {
  avatar: 'https://via.placeholder.com/100',
  firstName: 'John',
  lastName: 'Doe',
  bio: 'Software Engineer with a passion for learning new technologies.',
};

const Profile = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: mockProfile.avatar }} style={styles.avatar} />
      <Text style={styles.name}>{mockProfile.firstName} {mockProfile.lastName}</Text>
      <Text style={styles.bio}>{mockProfile.bio}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: '#000', // Add this line
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
  },
});

export default Profile;
