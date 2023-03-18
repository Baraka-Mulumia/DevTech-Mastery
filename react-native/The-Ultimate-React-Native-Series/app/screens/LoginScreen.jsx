import * as Yup from 'yup';

import {
  AppForm,
  AppFormField,
  FormErrorMessage,
  SubmitButton,
} from '../components/forms';
import { Image, StyleSheet } from 'react-native';
import React, { useState } from 'react';

import Screen from '../components/Screen';
import authAPI from '../api/auth';
import useAuth from '../auth/useAuth';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

const LoginScreen = () => {
  const [loginFailed, setLoginFailed] = useState(false);

  const { login } = useAuth();

  const handleSubmit = async ({ email, password }) => {
    const result = await authAPI.login(email, password);

    if (!result.ok) {
      setLoginFailed(true);
      return;
    }

    setLoginFailed(false);
    login(result.data);
  };

  return (
    <Screen style={styles.screen}>
      <Image source={require('../assets/logo-red.png')} style={styles.logo} />

      <AppForm
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => handleSubmit(values)}
        validationSchema={validationSchema}
      >
        <FormErrorMessage
          error='Invalid email and/or password'
          visible={loginFailed}
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

        <SubmitButton title='Login' />
      </AppForm>
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
  screen: {
    padding: 10,
  },
});
