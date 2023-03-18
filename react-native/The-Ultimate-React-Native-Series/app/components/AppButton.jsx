import { Pressable, StyleSheet, Text } from 'react-native';

import React from 'react';
import colors from '../config/colors';

export const AppButton = ({ onPress, title, color = 'primary' }) => {
  const bgColor = colors[color] || colors.primary;
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? bgColor + '80' : bgColor,
        },
        styles.wrapperCustom,
      ]}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapperCustom: {
    borderRadius: 25,
    padding: 15,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});
