import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

export const MainScreen = ({navigation}) => {
  return (
    <View style={styles.center}>
      <Text>
        MainScreen
      </Text>
      <Button
        title="Go to about"
        onPress={() => navigation.navigate('About')}
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
