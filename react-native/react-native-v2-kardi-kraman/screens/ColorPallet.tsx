import { FlatList, StyleSheet, Text, View } from 'react-native';

import ColorBox from '../components/ColorBox';

const ColorPallet = ({ route }: { route: any }) => {
  const { colors, palletName } = route.params;

  return (
    <View style={styles.container}>
      <FlatList
        data={colors}
        keyExtractor={(item) => item.colorName}
        renderItem={({ item }) => (
          <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
        )}
        ListHeaderComponent={
          <Text style={styles.headingText}>{palletName} Color Scheme</Text>
        }
      />
    </View>
  );
};

export default ColorPallet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingTop: 20,
  },

  headingText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
