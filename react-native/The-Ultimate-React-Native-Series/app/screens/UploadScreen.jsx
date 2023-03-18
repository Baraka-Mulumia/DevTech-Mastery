import * as Progress from 'react-native-progress';

import { Modal, StyleSheet, View } from 'react-native';

import { AppText } from '../components/AppText';
import LottieView from 'lottie-react-native';
import React from 'react';
import colors from '../config/colors';

const UploadScreen = ({ progress = 0, visible = false, onDone }) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        <AppText style={{ fontSize: 20 }}>
          {progress < 1 ? (
            <Progress.Bar
              color={colors.primary}
              progress={progress}
              width={200}
            />
          ) : (
            <LottieView
              autoPlay
              loop={false}
              onAnimationFinish={onDone}
              source={require('../assets/animations/done.json')}
              style={styles.animation}
            />
          )}
        </AppText>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  animation: {
    width: 150,
  },
});

export default UploadScreen;
