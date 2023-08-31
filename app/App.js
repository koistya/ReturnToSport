// App.js
import { ApolloClient, InMemoryCache, ApolloProvider, gql, createHttpLink } from '@apollo/client';
import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OnboardingScreen from './src/screens/OnboardingScreen';
import LoginStackNavigator from './src/navigators/LoginStackNavigator';
import HomeStackNavigator from './src/navigators/HomeStackNavigator';
import { AuthProvider, AuthContext } from './src/contexts/AuthContext';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'http://127.0.0.1:4000',
});

// Create a context link using setContext
const authLink = setContext(async (_, { headers }) => {
  // Get the authentication token from local storage (or wherever you store it)
  const token = await AsyncStorage.getItem('token');

  // Log the token
  // console.log("Token for this request:", token);

  // Return the headers to the context so the link can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


const AppContent = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);

  useEffect(() => {
    const checkFirstLaunchAndLoginStatus = async () => {
      try {
        const isFirstLaunchValue = await AsyncStorage.getItem('onboardingCompleted');
        const loggedInValue = await AsyncStorage.getItem('loggedIn');
        setIsLoggedIn(loggedInValue === 'true');
        setIsFirstLaunch(isFirstLaunchValue === null);
      } catch (error) {
        console.error(error);
      }
    };

    checkFirstLaunchAndLoginStatus();
  }, []);

  // Fetch initial data

  if (isFirstLaunch === null || isLoggedIn === null) {
    return null;
  } else {
    return (
      <ApolloProvider client={client}>
        <NavigationContainer>
          {isLoggedIn ? <HomeStackNavigator /> : <LoginStackNavigator />}
        </NavigationContainer>
      </ApolloProvider>
    );
  }
};

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}