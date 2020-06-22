import React, {useState} from 'react';
import {Alert, Button, Image, StyleSheet, View} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';


export const PhotoPicker = ({onPick}) => {
  const [image, setImage] = useState(null);

  async function askForPermissions() {
    const {status} = await Permissions.askAsync(
      Permissions.CAMERA,
      Permissions.CAMERA_ROLL
    );
    if (status !== 'granted') {
      Alert.alert('Ошибка!', 'Нет прав на создание фото');
      return false;
    }
    return true;
  }

  const takePhoto = async () => {
    const hasPermissions = await askForPermissions();
    if (!hasPermissions) {
      return;
    }
    const img = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    });
    setImage(img.uri);
    onPick(img.uri);
  };

  return (
    <View style={styles.wrapper}>
      <Button title='Сделать фото' onPress={takePhoto}/>
      {image && <Image source={{uri: image}}
                       style={styles.img}/>}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 10
  },
  img: {
    width: '100%',
    height: 200,
    marginTop: 10
  }
});
