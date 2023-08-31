// import React, { createContext, useContext, useState } from 'react';
// import { useMutation } from '@apollo/client';
// import { ADD_CHECKIN_MUTATION } from '../api';

// export const CheckInContext = createContext();

// export const useCheckIn = () => useContext(CheckInContext);

// export const CheckInProvider = ({ children }) => {
//   const [showForm, setShowForm] = useState(false);
//   const [notes, setNotes] = useState(null);
//   const [addCheckIn] = useMutation(ADD_CHECKIN_MUTATION);

//   const handleSubmit = async () => {
//     try {
//       await addCheckIn({ variables: { input: { notes } } });
//       setNotes(null);
//       setShowForm(false);
//     } catch (error) {
//       console.error('Error adding check-in:', error);
//     }
//   };

//   return (
//     <CheckInContext.Provider value={{ showForm, setShowForm, notes, setNotes, handleSubmit }}>
//       {children}
//     </CheckInContext.Provider>
//   );
// };

import React, { createContext, useContext, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_CHECKIN_MUTATION, DAILY_CHECKINS_QUERY } from '../api'; // Make sure DAILY_CHECKINS_QUERY is properly imported

export const CheckInContext = createContext();

export const useCheckIn = () => useContext(CheckInContext);

export const CheckInProvider = ({ children }) => {
  const [showForm, setShowForm] = useState(false);
  const [notes, setNotes] = useState(null);
  const [addCheckIn] = useMutation(ADD_CHECKIN_MUTATION);
  
  const today = new Date().toISOString().split('T')[0];
  const { data: dailyCheckInsData, refetch: refetchDailyCheckIns } = useQuery(DAILY_CHECKINS_QUERY, {
    variables: { date: today },
    fetchPolicy: 'network-only', 
  });

  const handleSubmit = async () => {
    try {
      await addCheckIn({ variables: { input: { notes } } });
      setNotes(null);
      setShowForm(false);
      // Refetch daily check-ins after successful submission
      refetchDailyCheckIns();
    } catch (error) {
      console.error('Error adding check-in:', error);
    }
  };

  return (
    <CheckInContext.Provider value={{ 
      showForm, 
      setShowForm, 
      notes, 
      setNotes, 
      handleSubmit,
      dailyCheckInsData  // Optionally, if you want to make the daily check-ins available through the context.
    }}>
      {children}
    </CheckInContext.Provider>
  );
};