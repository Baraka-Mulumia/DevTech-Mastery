import {
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useCallback, useEffect, useState } from 'react';

import PalletPreview from '../components/PalletPreview';

type ColorPallet = {
  paletteName: string;
  colors: { colorName: string; hexCode: string }[];
  id: number;
};

const Home = ({ navigation, route }: { navigation: any; route: any }) => {
  const [colorPalettes, setColorPalettes] = useState<ColorPallet[]>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchColorPalettes = useCallback(async () => {
    const response = await fetch(
      'https://color-palette-api.kadikraman.now.sh/palettes',
    );
    if (response.ok) {
      const palettes = (await response.json()) as ColorPallet[];
      setColorPalettes(palettes);
    }
  }, []);

  useEffect(() => {
    fetchColorPalettes();
  }, []);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await fetchColorPalettes();
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  }, []);

  const handleAddColorPallet = (newColorPallet: ColorPallet) => {
    setColorPalettes((prevColorPalettes) => [
      newColorPallet,
      ...prevColorPalettes,
    ]);
  };

  const newPalette = route.params ? route.params.newPalette : null;

  useEffect(() => {
    if (newPalette) {
      handleAddColorPallet(newPalette);
    }
  }, [newPalette]);

  return (
    <View style={styles.container}>
      <FlatList
        data={colorPalettes}
        keyExtractor={(item) => String(item.id)}
        refreshing={isRefreshing}
        onRefresh={handleRefresh}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ColorPallet', {
                palletName: item.paletteName,
                colors: item.colors,
              });
            }}
          >
            <PalletPreview
              palletName={item.paletteName}
              colors={item.colors.slice(0, 5).map((color) => color.hexCode)}
            />
          </TouchableOpacity>
        )}
        ListHeaderComponent={
          <Pressable
            onPress={() => {
              navigation.navigate('ColorPalletModal');
            }}
            style={styles.addColorPalletButton}
          >
            <Text style={styles.buttonText}>Add a color palette</Text>
          </Pressable>
        }
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addColorPalletButton: {
    backgroundColor: 'blue',
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
