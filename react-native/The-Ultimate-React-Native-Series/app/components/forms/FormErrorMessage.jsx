import { StyleSheet, Text, View } from 'react-native';

import { AppText } from '../AppText';
import React from 'react';

const FormErrorMessage = ({ error, visible }) => {
  if (!error || !visible) return null;

  return <AppText style={styles.error}>{error}</AppText>;
};

export default FormErrorMessage;

const styles = StyleSheet.create({
  error: {
    color: 'red',
  },
});
