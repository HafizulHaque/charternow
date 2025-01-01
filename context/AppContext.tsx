'use client';

import React, { createContext, ReactNode, useContext, useState } from 'react';

// Create the context
const AppContext = createContext<any>(null);

// Create a custom hook to safely access the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

// Create the provider component
export const AppProvider = ({ children }: {
  children: ReactNode
}) => {
  const [state, setState] = useState<{
    aiModeEnabled: boolean,
    vehicleType: 'car' | 'motorcycle' | 'boat',
    location: string,
    fromDate: string,
    toDate: string,
    groupSize: number
  }>({
    aiModeEnabled: false,
    vehicleType: 'car',
    location: '',
    fromDate: '',
    toDate: '',
    groupSize: 1
  });

  const setStateValue = (obj : {[key: string]: any}) =>
    setState((prevState) => ({
      ...prevState,
      ...obj
    }));

  return (
    <AppContext.Provider value={{ state, setStateValue }}>
      {children}
    </AppContext.Provider>
  );
};
