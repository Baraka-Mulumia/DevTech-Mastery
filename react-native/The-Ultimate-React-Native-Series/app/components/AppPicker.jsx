import { FlatList, Modal, Pressable, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';

import { AppText } from './AppText';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PickerItem from './PickerItem';
import Screen from './Screen';
import defaultStyles from '../config/defaultStyles';
import { uuidv4 } from '../lib/functions';

const AppPicker = ({
  icon,
  items,
  onSelectItem,
  PickerItemComponent = PickerItem,
  numberOfColumns = 1,
  placeholder,
  selectedItem,
  width = '100%',
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Pressable onPress={() => setModalVisible(true)}>
        <View
          style={[
            styles.container,
            {
              width,
            },
          ]}
        >
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.medium}
              style={styles.icon}
            />
          )}

          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.name}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}

          <MaterialCommunityIcons
            name={'chevron-down'}
            size={20}
            color={defaultStyles.colors.medium}
          />
        </View>
      </Pressable>
      <Modal visible={modalVisible} animationType={'slide'}>
        <Screen style={styles.screen}>
          <Pressable
            style={styles.closeButtonWrapper}
            onPress={() => setModalVisible(false)}
          >
            <AppText style={{ color: defaultStyles.colors.secondary }}>
              Close
            </AppText>
          </Pressable>
          <FlatList
            data={items}
            key={uuidv4()}
            keyExtractor={(item) => item.value.toString()}
            numColumns={numberOfColumns}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
};

export default AppPicker;

const styles = StyleSheet.create({
  closeButtonWrapper: {
    width: '100%',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
  },

  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    padding: 15,
    marginVertical: 10,
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },

  text: {
    flex: 1,
  },

  placeholder: {
    color: defaultStyles.colors.medium,
    flex: 1,
  },

  screen: {
    padding: 10,
  },

  wrapper: {
    position: 'relative',
    backgroundColor: 'transparent',
    width: '100%',
  },
});
