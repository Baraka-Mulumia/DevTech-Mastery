import { Pressable, StyleSheet } from 'react-native';

import AppIcon from './AppIcon';
import { AppText } from './AppText';
import React from 'react';

const CategoryPickerItem = ({
  onPress,
  item: { backgroundColor, icon, name },
}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <AppIcon backgroundColor={backgroundColor} name={icon} size={80} />
      <AppText style={styles.label}>{name}</AppText>
    </Pressable>
  );
};

export default CategoryPickerItem;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: 'center',
    width: '33%',
  },
  label: {
    marginTop: 5,
    textAlign: 'center',
  },
});
