import * as SplashScreen from 'expo-splash-screen';

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import { View } from 'react-native';
import authStorage from './storage';

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

// keep the splash screen visible until we are ready
SplashScreen.preventAutoHideAsync();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    const init = async () => {
      try {
        const user = await authStorage.getUser();
        if (user) setUser(user);
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    };

    init();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View
      onLayout={onLayoutRootView}
      style={{
        flex: 1,
      }}
    >
      <AuthContext.Provider
        value={{
          user,
          setUser,
        }}
      >
        {children}
      </AuthContext.Provider>
    </View>
  );
};

export default AuthProvider;
