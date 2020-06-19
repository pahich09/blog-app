import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

export const AboutScreen = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text>
        AboutScreen
      </Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
