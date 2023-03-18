import { StyleSheet, View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import colors from '../config/colors';

const AppIcon = ({
  name,
  size = 40,
  backgroundColor = colors.primary,
  iconColor = colors.light,
}) => {
  return (
    <View
      style={[
        styles.iconContainer,
        {
          backgroundColor,
          width: size,
          height: size,
          borderRadius: size / 2,
        },
      ]}
    >
      <MaterialCommunityIcons name={name} size={size * 0.5} color={iconColor} />
    </View>
  );
};

export default AppIcon;

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
