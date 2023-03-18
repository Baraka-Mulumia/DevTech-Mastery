import React, { useEffect } from 'react';

import AppNavigator from './app/navigation/AppNavigator';
import AuthNavigator from './app/navigation/AuthNavigator';
import AuthProvider from './app/auth/provider';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import OffLineNotice from './app/components/OffLineNotice';
import { navigationRef } from './app/navigation/rootNavigation';
import navigationTheme from './app/navigation/navigationTheme';
import useAuth from './app/auth/useAuth';

const Main = () => {
  const { user } = useAuth();
  return user ? <AppNavigator /> : <AuthNavigator />;
};

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer theme={navigationTheme} ref={navigationRef}>
        <GestureHandlerRootView
          style={{
            flex: 1,
          }}
        >
          <OffLineNotice />
          <Main />
        </GestureHandlerRootView>
      </NavigationContainer>
    </AuthProvider>
  );
}
