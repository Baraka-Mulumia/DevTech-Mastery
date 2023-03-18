import { StyleSheet, View } from 'react-native';

import { ListItem } from '../components/lists';
import { ListingDetailCard } from '../components/ListingDetailCard';
import React from 'react';

const ListingDetailScreen = ({
  route: {
    params: { title, price, images },
  },
}) => {
  return (
    <View style={styles.container}>
      <ListingDetailCard
        title={title}
        subTitle={`$${price}`}
        image={images[0].url}
        thumbnailUrl={images[0].thumbnailUrl}
      />
      <View style={styles.userContainer}>
        <ListItem
          image={require('../assets/mosh.jpg')}
          name='Mosh Hamedani'
          noOfListings={5}
        />
      </View>
    </View>
  );
};

export default ListingDetailScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: ' #f8f4f4',
    // paddingTop: 100,
    flex: 1,
  },
  userContainer: {
    marginVertical: 40,
  },
});
