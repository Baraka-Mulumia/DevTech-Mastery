import * as ImagePicker from 'expo-image-picker';

import { Pressable, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../config/colors';

const AppImageInput = ({ onAddImage }) => {
  const requestCameraPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) alert('You need to enable permission to access the library.');
  };

  useEffect(() => {
    requestCameraPermission();
  }, []);

  const selectImage = async () => {
    try {
      const { canceled, assets } = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });

      if (canceled) {
        console.log('User cancelled the image picker');
        return;
      }
      onAddImage(assets[0].uri);
    } catch (error) {
      console.log('Error reading an image', error);
    }
  };

  return (
    <Pressable onPress={selectImage} style={styles.container}>
      <MaterialCommunityIcons name='camera' size={40} color={colors.medium} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    padding: 5,
    overflow: 'hidden',
  },
});

export default AppImageInput;
