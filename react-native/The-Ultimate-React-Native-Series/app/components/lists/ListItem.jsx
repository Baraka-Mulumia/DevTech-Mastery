import { Image, Pressable, StyleSheet, View } from 'react-native';

import { AppText } from '../AppText';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Swipeable } from 'react-native-gesture-handler';
import colors from '../../config/colors';

const ListItem = ({
  image,
  title,
  subTitle,
  onPress = null,
  renderRightActions = null,
  IconComponent,
}) => {
  const Item = ({ pressed }) => (
    <View
      style={[
        styles.item,
        { backgroundColor: pressed ? colors.light : colors.white },
      ]}
    >
      {image && <Image source={image} style={styles.image} />}
      {IconComponent}
      <View style={styles.detailsWrapper}>
        <AppText style={styles.title} noOfLines={1}>
          {title}
        </AppText>
        {subTitle && (
          <AppText style={styles.subTitle} noOfLines={2}>
            {subTitle}
          </AppText>
        )}
      </View>
      <MaterialCommunityIcons
        color={colors.medium}
        name='chevron-right'
        size={25}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      {renderRightActions ? (
        <Swipeable renderRightActions={renderRightActions}>
          <Pressable onPress={onPress}>
            {({ pressed }) => <Item pressed={pressed} />}
          </Pressable>
        </Swipeable>
      ) : !renderRightActions && onPress ? (
        <Pressable onPress={onPress}>
          {({ pressed }) => <Item pressed={pressed} />}
        </Pressable>
      ) : (
        <Item />
      )}
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },

  item: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: colors.white,
    alignItems: 'center',
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },

  detailsWrapper: {
    marginLeft: 10,
    justifyContent: 'center',
    flex: 1,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },

  subTitle: {
    color: colors.medium,
    fontSize: 16,
  },
});
