import * as Yup from 'yup';

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from '../components/forms';
import React, { useState } from 'react';

import CategoryPickerItem from '../components/CategoryPickerItem';
import FormImagePicker from '../components/forms/FormImagePicker';
import Screen from '../components/Screen';
import { StyleSheet } from 'react-native';
import UploadScreen from './UploadScreen';
import { categories } from '../lib/dummydata';
import listingAPI from '../api/listings';
import { map } from 'lodash';
import useLocation from '../hooks/useLocation';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().nullable().label('Category'),
  images: Yup.array().min(1, 'Please select at least one image'),
});

const ListingEditScreen = () => {
  const location = useLocation();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (listing, { resetForm }) => {
    const dto = {
      ...listing,
      location,
      images: map(listing.images, ({ uri }) => uri),
    };

    setProgress(0);
    setUploadVisible(true);
    const result = await listingAPI.addListing(dto, (progress) =>
      setProgress(progress)
    );

    if (!result.ok) {
      setUploadVisible(false);
      return alert('Could not save the listing');
    }

    resetForm();
  };

  return (
    <Screen style={styles.screen}>
      <UploadScreen
        visible={uploadVisible}
        progress={progress}
        onDone={() => setUploadVisible(false)}
      />
      <AppForm
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: null,
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name='images' />

        <AppFormField
          autoCapitalize='none'
          autoCorrect={false}
          placeholder='Title'
          maxLength={255}
          name={'title'}
        />
        <AppFormField
          autoCapitalize='none'
          autoCorrect={false}
          placeholder='Price'
          maxLength={8}
          name={'price'}
          width={120}
          keyboardType='numeric'
        />

        <AppFormPicker
          items={categories}
          name='category'
          placeholder='Category'
          width={'50%'}
          PickerItemComponent={CategoryPickerItem}
          numberOfColumns={3}
        />

        <AppFormField
          autoCapitalize='none'
          autoCorrect={false}
          placeholder='Description'
          name={'description'}
          multiline
          numberOfLines={3}
        />
        <SubmitButton title='Post' />
      </AppForm>
    </Screen>
  );
};

export default ListingEditScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    paddingTop: 50,
  },

  inputGroup: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
});
