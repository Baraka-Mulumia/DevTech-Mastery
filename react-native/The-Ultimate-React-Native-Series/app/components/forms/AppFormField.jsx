import AppTextInput from './AppTextInput';
import FormErrorMessage from './FormErrorMessage';
import React from 'react';
import { StyleSheet } from 'react-native';
import { useFormikContext } from 'formik';

const AppFormField = ({ name, width, ...props }) => {
  const { setFieldTouched, touched, errors, setFieldValue, values } =
    useFormikContext();

  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        width={width}
        value={values[name]}
        {...props}
      />
      <FormErrorMessage visible={touched[name]} error={errors[name]} />
    </>
  );
};

export default AppFormField;

const styles = StyleSheet.create({});
