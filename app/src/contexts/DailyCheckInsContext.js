import React, { createContext, useContext } from 'react';
import { useQuery } from '@apollo/client';
import { DAILY_CHECKINS_QUERY } from '../api';

export const DailyCheckInsContext = createContext();

export const useDailyCheckIns = () => useContext(DailyCheckInsContext);

export const DailyCheckInsProvider = ({ children }) => {
  const today = new Date().toISOString().split('T')[0];
  const { loading, error, data, refetch } = useQuery(DAILY_CHECKINS_QUERY, {
    variables: { date: today },
    fetchPolicy: 'network-only',
  });

  return (
    <DailyCheckInsContext.Provider value={{ loading, error, data, updateDailyCheckIns: refetch }}>
      {children}
    </DailyCheckInsContext.Provider>
  );
};
