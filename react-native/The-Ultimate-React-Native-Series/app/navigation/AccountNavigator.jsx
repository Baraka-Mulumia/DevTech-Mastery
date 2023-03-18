import ListingsScreen from '../screens/ListingsScreen';
import { MessagesScreen } from '../screens/MessagesScreen';
import MyAccountScreen from '../screens/MyAccountScreen';
import ROUTES from './routes';
import React from 'react';
import colors from '../config/colors';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export const Stack = createNativeStackNavigator();

export const AccountNavigator = () => (
  <Stack.Navigator
    initialRouteName={ROUTES.ACCOUNT}
    screenOptions={{
      headerStyle: {
        backgroundColor: colors.primary,
        headerTintColor: '#fff',
      },
    }}
  >
    <Stack.Screen
      name={ROUTES.ACCOUNT}
      component={MyAccountScreen}
      options={{
        title: 'My Account',
      }}
    />
    <Stack.Screen
      name={ROUTES.MESSAGES}
      component={MessagesScreen}
      options={{
        title: 'My Messages',
      }}
    />
    <Stack.Screen
      name={ROUTES.USER_LISTINGS}
      component={ListingsScreen}
      options={{
        title: 'My Listings',
      }}
    />
  </Stack.Navigator>
);
