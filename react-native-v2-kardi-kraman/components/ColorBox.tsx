import { StyleSheet, Text, View } from 'react-native';

type BoxProps = {
  colorName: string;
  hexCode: string;
};

const ColorBox = ({ colorName, hexCode }: BoxProps) => {
  const textColor = parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1;

  return (
    <View style={[styles.box, { backgroundColor: hexCode }]}>
      <Text
        style={[styles.textWhite, { color: textColor ? 'black' : 'white' }]}
      >
        ${`${colorName} - ${hexCode}`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    padding: 10,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },

  textWhite: {
    color: 'white',
    paddingVertical: 2,
  },
});

export default ColorBox;
