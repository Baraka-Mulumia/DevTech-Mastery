import { Image, StyleSheet, View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import colors from '../config/colors';

export const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialCommunityIcons name='close' color={colors.white} size={35} />
        <MaterialCommunityIcons
          name='trash-can-outline'
          color={colors.white}
          size={35}
        />
      </View>
      <Image
        resizeMode='contain'
        style={styles.image}
        source={require('../assets/chair.jpg')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },

  image: {
    flex: 1,
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    width: '100%',
    backgroundColor: colors.black,
  },

  headerItem: {
    height: 50,
    width: 50,
  },
});
