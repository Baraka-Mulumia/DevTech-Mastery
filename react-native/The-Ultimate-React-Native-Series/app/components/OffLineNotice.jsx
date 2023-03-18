import { StyleSheet, View } from 'react-native';

import { AppText } from './AppText';
import Constants from 'expo-constants';
import React from 'react';
import colors from '../config/colors';
import { useNetInfo } from '@react-native-community/netinfo';

const OffLineNotice = () => {
  const netInfo = useNetInfo();

  if (netInfo.type !== 'unknown' && netInfo.isInternetReachable === false) {
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>No Internet Connection</AppText>
      </View>
    );
  }

  return null;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 50,
    width: '100%',
    position: 'absolute',
    top: Constants.statusBarHeight,
    zIndex: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.white,
  },
});

export default OffLineNotice;
