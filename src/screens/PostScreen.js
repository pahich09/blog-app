import React from 'react';
import {ScrollView, StyleSheet, Text, Image, View, Button} from 'react-native';
import {THEME} from '../theme';


export const PostScreen = ({route}) => {
  const {params: {text, img, onRemove}} = route;

  return (
    <ScrollView >
      <Image
        style={styles.image}
        source={{uri: img}}
      />
      <View style={styles.textBox}>
        <Text style={styles.text}>
          {text}
        </Text>
      </View>
      <View style={styles.buttonBlock}>
        <Button
          title='Удалить'
          color={THEME.DANGER_COLOR}
          onPress={onRemove}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200
  },
  textBox: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  text: {
    fontSize: 22,
    fontFamily: 'open-regular'
  },
  buttonBlock: {

  }
});
