import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { useQuery } from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import gql from 'graphql-tag';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigation } from '@react-navigation/native';

const ME_QUERY = gql`
  query Me {
    me {
      id
      username
      email
      avatarUrl
      name
    }
  }
`;

const MoreScreen = () => {
  const navigation = useNavigation();
  const { setIsLoggedIn } = useContext(AuthContext);

  const { loading, error, data } = useQuery(ME_QUERY);
  

  const handleLogout = async () => {
      try {
        await AsyncStorage.removeItem('token');
        await AsyncStorage.removeItem('loggedIn');
        await AsyncStorage.removeItem('onboardingCompleted');
        // Update the app state to reflect the logged-out status
        setIsLoggedIn(false);
      } catch (error) {
        console.error(error);
      }
    };

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  const { me } = data;

  return (
    <View style={styles.container}>
      <Image source={{ uri: me.avatarUrl }} style={styles.avatar} />
      <Text style={styles.name}>{me.name}</Text>
      <Text style={styles.detail}>Usernamei: {me.username}</Text>
      <Text style={styles.detail}>Email: {me.email}</Text>

      <Button title="Log Out" onPress={handleLogout} />
      <Button 
        title="Invite" 
        onPress={() => navigation.navigate('Invite')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detail: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default MoreScreen;
