import * as Yup from 'yup';

import {
  AppForm,
  AppFormField,
  FormErrorMessage,
  SubmitButton,
} from '../components/forms';
import React, { useState } from 'react';

import { AppText } from '../components/AppText';
import LoadingActivityIndicator from '../components/LoadingActivityIndicator';
import Screen from '../components/Screen';
import { StyleSheet } from 'react-native';
import authAPI from '../api/auth';
import colors from '../config/colors';
import useAPI from '../hooks/useAPI';
import useAuth from '../auth/useAuth';
import userAPI from '../api/users';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(4).label('Name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

const RegisterScreen = () => {
  const [error, setError] = useState();
  const { login } = useAuth();

  const registerAPI = useAPI(userAPI.register);
  const loginAPI = useAPI(authAPI.login);

  const handleSubmit = async (userInfo) => {
    const response = await registerAPI.request(userInfo);

    if (!response.ok) {
      if (response.data) setError(response.data.error);
      else {
        setError('An unexpected error occurred.');
        console.log(response);
      }
      return;
    }

    const { data: authToken } = await loginAPI.request(
      userInfo.email,
      userInfo.password
    );

    login(authToken);
  };

  return (
    <>
      <LoadingActivityIndicator
        visible={loginAPI.loading || registerAPI.loading}
      />
      <Screen style={styles.screen}>
        <AppText style={styles.heading}>Welcome to DoneWithIt</AppText>

        <AppForm
          initialValues={{ name: '', email: '', password: '' }}
          onSubmit={(values) => handleSubmit(values)}
          validationSchema={validationSchema}
        >
          <FormErrorMessage error={error} visible={error} />
          <AppFormField
            autoCapitalize='none'
            autoCorrect={false}
            icon='account'
            keyboardType='default'
            placeholder='Name'
            name={'name'}
            // only works on iOS
            textContentType='name'
          />

          <AppFormField
            autoCapitalize='none'
            autoCorrect={false}
            icon='email'
            keyboardType='email-address'
            placeholder='Email'
            name={'email'}
            // only works on iOS
            textContentType='emailAddress'
          />

          <AppFormField
            autoCapitalize='none'
            autoCorrect={false}
            icon='lock'
            placeholder='Password'
            name={'password'}
            secureTextEntry={true}
            // only works on iOS
            textContentType='password'
          />
          <SubmitButton title='Register' />
        </AppForm>
      </Screen>
    </>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 20,
    textAlign: 'center',
    color: colors.secondary,
  },

  screen: {
    padding: 10,
  },
});
