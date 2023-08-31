// HomeScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CustomHeader from '../components/Header';
import WelcomeBanner from '../components/WelcomeBanner';
import DailyPTRoutine from '../components/DailyPTRoutine';
import PTCheckInsCard from '../components/PTCheckInsCard';
import PTCheckInForm from '../components/PTCheckInForm';
import ExerciseRoutine from '../components/ExcerciseRoutine';
import DailyChecklist from '../components/DailyChecklist';
import DailyCheckInsCard from '../components/DailyCheckInsCard';
import { useFocusEffect } from '@react-navigation/native';
import { DailyCheckInsProvider } from '../contexts/DailyCheckInsContext';

const HomeScreen = ({ navigation }) => {
  const [refreshKey, setRefreshKey] = useState(0);

  useFocusEffect(
    React.useCallback(() => {
      // Increment the refresh key to trigger a re-render
      setRefreshKey(prevKey => prevKey + 1);
      
      return () => {
        // Clean up if needed
      };
    }, [])
  );


  const handleBellPress = () => {
    console.log('Bell pressed');
  };

  const checkInsData = [
    {
      count: 1,
      avatars: [
        'https://i.pravatar.cc/50',
        'https://i.pravatar.cc/50',
      ],
    },
    {
      count: 3,
      avatars: [
        'https://i.pravatar.cc/50',
        'https://i.pravatar.cc/50',
      ],
    },
  ];

  return (
   <>
      <CustomHeader title="Return To Snow" /> 
      {/* <WelcomeBanner /> */}
      {/* <View style={styles.container}> */}
        {/* <PTCheckInsCard checkInsData={checkInsData} /> */}
        <DailyCheckInsProvider>
          <DailyCheckInsCard key={refreshKey} />
        </DailyCheckInsProvider>
        {/* <ExerciseRoutine /> */}
        {/* <DailyChecklist /> */}
      {/* </View> */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
  },
});

export default HomeScreen;
