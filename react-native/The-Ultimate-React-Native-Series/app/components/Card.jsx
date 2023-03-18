import { StyleSheet, View } from 'react-native';

import { AppText } from './AppText';
import { Image } from 'react-native-expo-image-cache';
import React from 'react';
import colors from '../config/colors';

export const Card = ({ title, subTitle, imageUrl, thumbnailUrl }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        uri={imageUrl}
        preview={{
          uri: thumbnailUrl,
        }}
        tint='light'
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title} noOfLines={1}>
          {title}
        </AppText>
        <AppText style={styles.subTitle} noOfLines={2}>
          {subTitle}
        </AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
    fontSize: 20,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: 'bold',
  },
});
