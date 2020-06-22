import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const AboutScreen = () => {
  return (
    <View style={styles.center}>
      <Text style={styles.textAbout}>
        Версия приложения <Text style={styles.textBold}>1.0.0</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textAbout: {
    fontFamily: 'open-regular'
  },
  textBold: {
    fontFamily: 'open-bold'
  }
});
