import React, {useState} from 'react';
import {
  Button,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback
} from 'react-native';
import {THEME} from '../theme';
import {useDispatch} from 'react-redux';
import {createPost} from '../store/actions/postAction';
import {PhotoPicker} from '../components/PhotoPicker';


export const CreateScreen = ({navigation}) => {

  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const [img, setImg] = useState(null);

  const onPressHandler = () => {
    const post = {
      img,
      text,
      date: new Date().toJSON(),
      booked: false
    };
    dispatch(createPost(post));
    navigation.navigate('Home');
  };

  const photoHandler = uri => {
    setImg(uri);
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
        <PhotoPicker onPick={photoHandler}/>
        <Button title='Сохранить'
                color={THEME.MAIN_COLOR}
                onPress={onPressHandler}
                disabled={!text || !img}
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
