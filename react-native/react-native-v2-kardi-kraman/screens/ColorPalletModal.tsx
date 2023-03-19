import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useCallback, useState } from 'react';

import { Color } from '../types';
import ColorInputList from '../components/ColorInputList';
import { StackNavigationProp } from '@react-navigation/stack';

const ColorPalletModal = ({
  navigation,
}: {
  navigation: StackNavigationProp<any, any>;
}) => {
  const [colorPalletName, setColorPalletName] = useState('');

  const [selectedColors, setSelectedColors] = useState<Color[]>([]);

  const handleColorSelection = useCallback(
    (color: Color, isNewValue: boolean) => {
      if (isNewValue) {
        setSelectedColors((prevSelectedColors) => [
          ...prevSelectedColors,
          color,
        ]);
      } else {
        setSelectedColors((prevSelectedColors) =>
          prevSelectedColors.filter((c) => c.colorName !== color.colorName),
        );
      }
    },
    [selectedColors, setSelectedColors],
  );

  const handleSubmit = useCallback(() => {
    if (
      !colorPalletName || // if colorPalletName is empty
      colorPalletName.length < 3 // or if colorPalletName is less than 3 characters
    ) {
      Alert.alert('Error', 'Name must be at least 3 characters long');
      return;
    }

    if (selectedColors.length < 3) {
      Alert.alert('Error', 'You must select at least 3 colors');
      return;
    }

    const newPalette = {
      paletteName: colorPalletName,
      colors: selectedColors,
      id: Math.random().toString(36).substr(2, 9),
    };

    navigation.navigate('Home', {
      newPalette,
    });
  }, [colorPalletName, selectedColors]);

  const handleNameChange = (text: string) => {
    setColorPalletName(text);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textInputLabel}>Name of your color pallette</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter name of your color pallette"
          value={colorPalletName}
          onChangeText={handleNameChange}
        />
      </View>
      <ColorInputList
        selectedColors={selectedColors}
        onColorSelection={handleColorSelection}
      />
      <Pressable style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>
    </View>
  );
};

export default ColorPalletModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },

  textInputLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    margin: 12,
    paddingHorizontal: 10,
  },

  submitButton: {
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
