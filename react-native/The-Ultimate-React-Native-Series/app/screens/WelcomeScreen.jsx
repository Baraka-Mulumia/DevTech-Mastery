import { Image, ImageBackground, StyleSheet, View } from 'react-native';

import { AppButton } from '../components/AppButton';
import { AppText } from '../components/AppText';
import ROUTES from '../navigation/routes';
import React from 'react';

const WelcomeScreen = ({ navigation: { navigate } }) => {
  return (
    <ImageBackground
      style={styles.imageBg}
      source={require('../assets/background.jpg')}
      blurRadius={10}
    >
      <View style={styles.logoWrapper}>
        <Image
          style={styles.image}
          source={require('../assets/logo-red.png')}
        />
        <AppText
          style={{
            fontSize: 25,
            fontWeight: '600',
            paddingVertical: 20,
          }}
        >
          Sell what you Don't Need
        </AppText>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton
          title='Login'
          color='primary'
          onPress={() => navigate(ROUTES.LOGIN)}
        />
        <AppButton
          title='Register'
          color='secondary'
          onPress={() => navigate(ROUTES.REGISTER)}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    width: '100%',
    padding: 20,
  },

  imageBg: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 50,
  },

  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },

  logoWrapper: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
