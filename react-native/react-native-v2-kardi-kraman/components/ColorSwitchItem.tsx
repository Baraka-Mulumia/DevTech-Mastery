import { StyleSheet, Switch, Text, View } from 'react-native';

import { Color } from '../types';

type ColorSwitchItemProps = {
  color: Color;
  isSelected: boolean;
  onColorSelection: (color: Color, isNewValue: boolean) => void;
};

const ColorSwitchItem = ({
  color,
  isSelected,
  onColorSelection,
}: ColorSwitchItemProps) => {
  return (
    <View style={styles.container}>
      <Text style={isSelected ? styles.colorLabelSelected : styles.colorLabel}>
        {color.colorName}
      </Text>
      <Switch
        value={isSelected}
        onValueChange={(newValue) => onColorSelection(color, newValue)}
      />
    </View>
  );
};

export default ColorSwitchItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 2,
  },

  colorLabel: {
    fontSize: 18,
    color: 'gray',
  },

  colorLabelSelected: {
    fontSize: 18,
    color: 'black',
  },
});
