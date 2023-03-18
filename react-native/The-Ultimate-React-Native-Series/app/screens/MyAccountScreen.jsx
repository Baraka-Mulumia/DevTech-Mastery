import { FlatList, Pressable, StyleSheet, View } from 'react-native';
import { ListItem, ListItemSeparator } from '../components/lists';

import AppIcon from '../components/AppIcon';
import ROUTES from '../navigation/routes';
import React from 'react';
import Screen from '../components/Screen';
import colors from '../config/colors';
import useAuth from '../auth/useAuth';

const menuItems = [
  {
    title: 'My Listings',
    targetScreen: ROUTES.USER_LISTINGS,
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary,
    },
  },
  {
    title: 'My Messages',
    targetScreen: ROUTES.MESSAGES,
    icon: {
      name: 'email',
      backgroundColor: colors.secondary,
    },
  },
];

const MyAccountScreen = ({ navigation: { navigate } }) => {
  const handleNavigation = (targetScreen) => navigate(targetScreen);

  const { user, logout } = useAuth();

  return (
    <Screen style={styles.screen}>
      <View style={styles.wrapper}>
        <ListItem
          title={user.name}
          subTitle={user.email}
          image={require('../assets/baraka.jpg')}
        />
      </View>
      <View style={styles.wrapper}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <Pressable onPress={() => handleNavigation(item.targetScreen)}>
              <ListItem
                title={item.title}
                IconComponent={
                  <AppIcon
                    name={item.icon.name}
                    backgroundColor={item.icon.backgroundColor}
                    iconColor={colors.white}
                  />
                }
              />
            </Pressable>
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>

      <Pressable onPress={logout}>
        <ListItem
          title='Logout'
          IconComponent={
            <AppIcon
              name='logout'
              backgroundColor={colors.danger}
              iconColor={colors.white}
            />
          }
        />
      </Pressable>
    </Screen>
  );
};

export default MyAccountScreen;

const styles = StyleSheet.create({
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
    marginVertical: 5,
    borderRadius: 10,
  },

  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  title: {
    fontSize: 14,
    fontWeight: '500',
  },

  screen: {
    backgroundColor: colors.light,
  },

  wrapper: {
    marginVertical: 20,
  },
});
