// components/WelcomeBanner.js
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import colors from '../constants/colors';
import constants from '../constants/constants';

const WelcomeBanner = () => {
  const userName = 'Dylan';

  return (
    <View style={styles.banner}>
      <Text style={styles.title}>DAY 180</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    // height: Dimensions.get('window').height / 4,
    paddingBottom: 10,
    backgroundColor: colors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default WelcomeBanner;
