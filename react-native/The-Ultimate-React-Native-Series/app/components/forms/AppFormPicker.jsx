import AppPicker from '../AppPicker';
import FormErrorMessage from './FormErrorMessage';
import React from 'react';
import { useFormikContext } from 'formik';

const AppFormPicker = ({
  items,
  name,
  width,
  placeholder,
  PickerItemComponent,
  numberOfColumns,
}) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        placeholder={placeholder}
        items={items}
        selectedItem={values[name]}
        onSelectItem={(item) => setFieldValue(name, item)}
        width={width}
        PickerItemComponent={PickerItemComponent}
        numberOfColumns={numberOfColumns}
      />
      <FormErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormPicker;
