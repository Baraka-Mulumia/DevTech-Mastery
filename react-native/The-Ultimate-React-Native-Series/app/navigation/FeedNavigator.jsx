import ListingDetailScreen from '../screens/ListingDetailScreen';
import ListingsScreen from '../screens/ListingsScreen';
import ROUTES from './routes';
import React from 'react';
import colors from '../config/colors';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator
    initialRouteName={ROUTES.LISTINGS}
    screenOptions={{
      headerShown: false,
      headerStyle: {
        backgroundColor: colors.primary,
        headerTintColor: '#fff',
      },
    }}
  >
    <Stack.Screen
      name={ROUTES.LISTINGS}
      component={ListingsScreen}
      options={{
        title: 'Feed',
      }}
    />
    <Stack.Screen
      name={ROUTES.LISTING_DETAILS}
      component={ListingDetailScreen}
      options={({ route }) => ({
        title: route.params.title,
        headerBackVisible: false,
      })}
    />
  </Stack.Navigator>
);

export default FeedNavigator;
