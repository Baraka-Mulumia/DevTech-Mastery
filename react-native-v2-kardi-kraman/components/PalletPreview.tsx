import { FlatList, StyleSheet, Text, View } from 'react-native';

const PalletPreview = ({
  palletName,
  colors,
}: {
  palletName: string;
  colors: string[];
}) => {
  const ColorBox = ({ color }: { color: string }) => (
    <View style={[styles.colorBox, { backgroundColor: color }]} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>{palletName}</Text>
      <FlatList
        data={colors}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <ColorBox color={item} />}
        horizontal
        style={styles.container}
      />
    </View>
  );
};

export default PalletPreview;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginVertical: 8,
  },
  headingText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  colorBox: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
});
