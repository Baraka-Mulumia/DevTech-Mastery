import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import React, { useRef } from 'react';

import AppImageInput from './forms/AppImageInput';
import { map } from 'lodash';

const ImageInputList = ({ imageUris = [], onRemoveImage, onAddImage }) => {
  const scrollViewRef = useRef();

  const ListItemImage = ({ item }) => {
    const handleRemoveImage = () => {
      Alert.alert('Delete', 'Are you sure you want to delete this image?', [
        { text: 'Yes', onPress: () => onRemoveImage(item.id) },
        { text: 'No' },
      ]);
    };

    return (
      <Pressable onPress={handleRemoveImage}>
        <Image source={{ uri: item.uri }} style={styles.image} />
      </Pressable>
    );
  };

  return (
    <View>
      <ScrollView
        horizontal
        ref={scrollViewRef}
        onContentSizeChange={() => scrollViewRef.current.scrollToEnd()}
      >
        <View style={styles.container}>
          {map(imageUris, (imageUri) => (
            <ListItemImage key={imageUri.id} item={imageUri} />
          ))}
          <AppImageInput onAddImage={onAddImage} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
    padding: 5,
  },
});

export default ImageInputList;
