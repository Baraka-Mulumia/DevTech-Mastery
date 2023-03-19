import { FlatList, StyleSheet, View } from 'react-native';

import { COLORS } from '../data/colors';
import { Color } from '../types';
import ColorSwitchItem from './ColorSwitchItem';

type ColorInputListProps = {
  selectedColors: Color[];
  onColorSelection: (color: Color, isNewValue: boolean) => void;
};

const ColorInputList = ({
  selectedColors,
  onColorSelection,
}: ColorInputListProps) => {
  return (
    <FlatList
      style={styles.container}
      data={COLORS}
      keyExtractor={(item) => item.colorName}
      renderItem={({ item }) => (
        <ColorSwitchItem
          color={item}
          onColorSelection={onColorSelection}
          isSelected={selectedColors.includes(item)}
        />
      )}
      //DIVIDER
      ItemSeparatorComponent={() => (
        <View style={{ height: 1, backgroundColor: 'gray' }} />
      )}
    />
  );
};

export default ColorInputList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
  },
});
