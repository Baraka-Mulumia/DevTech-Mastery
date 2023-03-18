import { Pressable, StyleSheet, Text, View } from 'react-native';

import { AppText } from './AppText';
import React from 'react';
import defaultStyles from '../config/defaultStyles';

const PickerItem = ({ item, onPress }) => {
  const { colors } = defaultStyles;

  return (
    <Pressable onPress={onPress}>
      {({ pressed }) => (
        <AppText
          style={{
            padding: 20,
            backgroundColor: pressed ? colors.light : colors.white,
          }}
        >
          {item.label}
        </AppText>
      )}
    </Pressable>
  );
};

export default PickerItem;

const styles = StyleSheet.create({});
