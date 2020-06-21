import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  Button
} from 'react-native';
import {THEME} from '../theme';
import {useDispatch} from 'react-redux';
import {createPost} from '../store/actions/postAction';


export const CreateScreen = ({navigation}) => {

  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const img = 'https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg';

  const onPressHandler = () => {
    const post = {
      img,
      text,
      date: new Date().toJSON(),
      booked: false
    };
    dispatch(createPost(post));
    navigation.navigate('Home')
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView style={styles.wrapper}>

        <Text style={styles.title}>
          Создать новый пост
        </Text>
        <TextInput style={styles.textArea}
                   placeholder='Введите текс поста'
                   value={text}
                   onChangeText={setText}
                   multiline
        />
        <Image
          style={{
            width: '100%',
            height: 200
          }}
          source={{uri: 'https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg'}}/>

        <Button title='Сохранить'
                color={THEME.MAIN_COLOR}
                onPress={onPressHandler}
        />
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'open-regular',
    marginVertical: 10
  },
  textArea: {
    padding: 10,
    marginBottom: 10
  }

});
