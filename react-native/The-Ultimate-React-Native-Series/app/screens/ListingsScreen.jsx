import { Pressable, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';

import { AppButton } from '../components/AppButton';
import { AppText } from '../components/AppText';
import { Card } from '../components/Card';
import { FlatList } from 'react-native-gesture-handler';
import LoadingActivityIndicator from '../components/LoadingActivityIndicator';
import ROUTES from '../navigation/routes';
import Screen from '../components/Screen';
import colors from '../config/colors';
import listingAPI from '../api/listings';
import useAPI from '../hooks/useAPI';

const ListingsScreen = ({ navigation: { navigate } }) => {
  const handlePress = (item) => {
    navigate(ROUTES.LISTING_DETAILS, item);
  };

  const {
    data: listings,
    error,
    loading,
    request: loadListings,
  } = useAPI(listingAPI.getListings);

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <>
      <LoadingActivityIndicator visible={loading} />
      <Screen style={styles.screen}>
        {error && (
          <>
            <AppText>Couldn't retrieve the listings.</AppText>
            <AppButton title='Retry' onPress={loadListings} />
          </>
        )}

        <FlatList
          data={listings}
          keyExtractor={(listing) => listing.id}
          renderItem={({ item }) => (
            <Pressable onPress={() => handlePress(item)}>
              <Card
                title={item.title}
                subTitle={`$${item.price}`}
                imageUrl={item.images[0].url}
                thumbnailUrl={item.images[0].thumbnailUrl}
              />
            </Pressable>
          )}
        />
      </Screen>
    </>
  );
};

export default ListingsScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});
