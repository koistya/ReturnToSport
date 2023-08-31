// components/CustomHeader.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context'; // Import useSafeAreaInsets
import colors from '../constants/colors';
import constants from '../constants/constants';
import { CheckInProvider } from '../contexts/CheckInContext';
import PTCheckInForm from './PTCheckInForm';


const CustomHeader = ({ title }) => {
  const insets = useSafeAreaInsets(); // Use the hook to get insets

  return (
    <View style={[styles.header, { paddingTop: insets.top }]}>
      <View style={styles.headerContent}>
        <View style={styles.logoContainer}>
          {/* <Image
            source={require('../../assets/logo-dark.png')}
            style={styles.logo}
          /> */}
          <Text style={styles.headerTitle}>{title}</Text>
        </View>
        <TouchableOpacity style={styles.bellContainer}>
        <CheckInProvider>
          <PTCheckInForm />
        </CheckInProvider>
        {/* <MaterialCommunityIcons name={iconName} size={size} color={color} /> */}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.white,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: constants.headerHeight,
    paddingHorizontal: 20,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
  },
  headerTitle: {
    color: colors.black, // Use shared color
    fontSize: 20, // Use shared constant
    fontWeight: '800',
    marginLeft: 10,
  },
  bellContainer: {
    padding: 10,
  },
  bellIcon: {
    fontSize: constants.defaultFontSize, // Use shared constant
    color: colors.white, // Use shared color
  },
});

export default CustomHeader;
