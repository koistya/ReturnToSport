import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { AuthContext } from '../contexts/AuthContext';

const SIGN_IN_MUTATION = gql`
  mutation SignIn($input: SignInInput!) {
    signIn(input: $input) {
      token
      user {
        id
        username
        email
        avatarUrl
        name
      }
    }
  }
`;

const LoginScreen = () => {
  const [username, setUsername] = useState('dhalla2');
  const [password, setPassword] = useState('password');
  const { setIsLoggedIn } = useContext(AuthContext);

  const [signIn, { data }] = useMutation(SIGN_IN_MUTATION);

  const handleLogin = async () => {
     if (username && password) {
        const { data } = await signIn({ variables: { input: { username, password } } });

        if (data && data.signIn && data.signIn.token) {
          await AsyncStorage.setItem('token', 'true');
          await AsyncStorage.setItem('token', data.signIn.token); // You can also save the token to async storage if needed
          setIsLoggedIn(true);
        } else {
          alert('Invalid credentials');
        }
      } else {
          alert('Please enter your email and password');
      }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username or Email"
        onChangeText={(text) => setUsername(text)}
        value={username}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#1f8ef1',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default LoginScreen;
