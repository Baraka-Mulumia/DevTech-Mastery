import { StyleSheet, Text, View } from 'react-native';

import { Image } from 'react-native-expo-image-cache';
import React from 'react';
import colors from '../config/colors';

export const ListingDetailCard = ({ title, subTitle, image, thumbnailUrl }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        uri={image}
        preview={{
          uri: thumbnailUrl,
        }}
        tint='light'
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{subTitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 300,
    marginBottom: 10,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
    fontSize: 20,
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
  },
});
