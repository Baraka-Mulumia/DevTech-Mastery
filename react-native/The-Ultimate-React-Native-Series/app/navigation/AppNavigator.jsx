import { AccountNavigator } from './AccountNavigator';
import FeedNavigator from './FeedNavigator.jsx';
import ListingEditScreen from '../screens/ListingEditScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import NewListingButton from './NewListingButton';
import ROUTES from './routes';
import React from 'react';
import colors from '../config/colors';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: colors.primary,
      tabBarInactiveTintColor: colors.medium,
    }}
  >
    <Tab.Screen
      name={ROUTES.FEED}
      component={FeedNavigator}
      options={{
        headerShown: false,
        tabBarIcon: ({ size, color, focused }) => (
          <MaterialCommunityIcons
            name={focused ? 'home-circle' : 'home-circle-outline'}
            size={size}
            color={color}
          />
        ),
        tabBarShowLabel: false,
      }}
    />
    <Tab.Screen
      name={ROUTES.LISTING_EDIT}
      component={ListingEditScreen}
      options={({ navigation }) => ({
        tabBarButton: () => (
          <NewListingButton
            onPress={() => navigation.navigate(ROUTES.LISTING_EDIT)}
          />
        ),
        title: 'Add Listing',
      })}
    />
    <Tab.Screen
      name={ROUTES.USER_ACCOUNT}
      component={AccountNavigator}
      options={{
        headerShown: false,
        tabBarIcon: ({ size, color, focused }) => (
          <MaterialCommunityIcons
            name={focused ? 'account-multiple' : 'account-multiple-outline'}
            size={size}
            color={color}
          />
        ),
        tabBarShowLabel: false,
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
