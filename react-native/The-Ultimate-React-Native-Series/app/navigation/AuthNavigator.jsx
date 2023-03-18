import AppNavigator from './AppNavigator';
import LoginScreen from '../screens/LoginScreen';
import ROUTES from './routes';
import React from 'react';
import RegisterScreen from '../screens/RegisterScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator
    initialRouteName={ROUTES.WELCOME}
    screenOptions={{
      headerStyle: {
        headerTintColor: '#fff',
      },
    }}
  >
    <Stack.Screen
      name={ROUTES.WELCOME}
      component={WelcomeScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name={ROUTES.REGISTER}
      component={RegisterScreen}
      options={{
        title: 'Register',
      }}
    />
    <Stack.Screen
      name={ROUTES.LOGIN}
      component={LoginScreen}
      options={{
        title: 'Login',
      }}
    />
    <Stack.Screen
      name={ROUTES.APP}
      component={AppNavigator}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export default AuthNavigator;
