import React, { useState, createContext, useEffect } from 'react';
import { SpeechesWedding } from '../constantes';

export const SpeechContext = createContext();

export const SpeechProvider = ({ children }) => {
  const [speeches, setSpeeches] = useState(() => {
    const localData = localStorage.getItem('speeches');
    return localData ? JSON.parse(localData) : SpeechesWedding;
  });
  
  useEffect(() => {
    localStorage.setItem('speeches', JSON.stringify(speeches));
  }, [speeches]);

  return (
    <SpeechContext.Provider value={{ speeches, setSpeeches }}>
      {children}
    </SpeechContext.Provider>
  );
};
