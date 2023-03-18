import { StyleSheet, View } from 'react-native';

import LottieView from 'lottie-react-native';
import React from 'react';
import colors from '../config/colors';

const LoadingActivityIndicator = ({ visible = false }) => {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <LottieView
        autoPlay
        loop
        source={require('../assets/animations/loader.json')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    alignItems: 'center',
    backgroundColor: colors.white,
    justifyContent: 'center',
    height: '100%',
    opacity: 0.8,
    position: 'absolute',
    width: '100%',
    zIndex: 1,
  },
});

export default LoadingActivityIndicator;
