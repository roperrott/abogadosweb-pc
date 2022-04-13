import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { CircularProgress } from '@mui/material';
import { auth } from '../firebase';

export const Auth = React.createContext();

export const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);
      setShowChild(true);
    });
  }, []);

  if (!showChild) {
    return (
      <CircularProgress
        size={30}
        sx={{
          alignSelf: 'center',
        }}
      />
    );
  }
  return (
    <Auth.Provider
      value={{
        user,
      }}
    >
      {children}
    </Auth.Provider>
  );
};
