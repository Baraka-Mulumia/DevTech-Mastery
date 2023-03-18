import React, { useState } from 'react';

import AppPicker from '../components/AppPicker';
import { AppTextInput } from '../components/forms';
import Screen from '../components/Screen';
import { StyleSheet } from 'react-native';

const categories = [
  {
    label: 'Furniture',
    value: 1,
  },
  {
    label: 'Clothing',
    value: 2,
  },
  {
    label: 'Cameras',
    value: 3,
  },
];

export const PlayGroundScreen = () => {
  const [isNew, setIsNew] = useState(false);

  const [category, setCategory] = useState(categories[0]);

  return (
    <Screen style={styles.container}>
      <AppPicker
        placeholder={'Category'}
        icon={'apps'}
        items={categories}
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
      />
      <AppTextInput placeholder={'Email Address'} icon={'email'} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'red',
  },
});
