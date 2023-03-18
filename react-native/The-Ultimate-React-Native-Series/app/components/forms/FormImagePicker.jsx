import FormErrorMessage from './FormErrorMessage';
import ImageInputList from '../ImageInputList';
import React from 'react';
import { useFormikContext } from 'formik';
import { uuidv4 } from '../../lib/functions';

const FormImagePicker = ({ name }) => {
  const { setFieldValue, values, setFieldTouched, errors, touched } =
    useFormikContext();

  const imageUris = values[name];

  const handleAdd = (uri) => {
    setFieldTouched(name);
    setFieldValue(name, [...imageUris, { id: uuidv4(), uri }]);
  };

  const handleRemove = (id) => {
    setFieldValue(
      name,
      imageUris.filter((uri) => uri.id !== id)
    );
  };

  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <FormErrorMessage visible={touched[name]} error={errors[name]} />
    </>
  );
};

export default FormImagePicker;
