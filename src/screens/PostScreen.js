import React, {useEffect} from 'react';
import {Button, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {THEME} from '../theme';
import {useDispatch, useSelector} from 'react-redux';
import {removePost, toggleBooked} from '../store/actions/postAction';


export const PostScreen = ({route: {params: {id}}, navigation}) => {

  const dispatch = useDispatch();

  const post = useSelector(state => state.post.allPosts.find(item => item.id === id));

  const isBooked = useSelector(state => {
    return state.post.allPosts.some(el => el.id === id)
      && state.post.allPosts.find(item => item.id === id).booked;
  });

  const onRemove = () => {
    navigation.navigate('TabNavigator');
    dispatch(removePost(id));
  };

  const toggleBookedHandler = id => {
    dispatch(toggleBooked(id));
  };

  useEffect(() => {
    navigation.setParams({
      toggleBookedHandler,
      date: post.date,
      id: post.id
    });
  }, []);

  useEffect(() => {
    post && navigation.setParams({
      isBooked,
    });
  }, [isBooked]);

  if (!post) return null;

  const {text, img} = post;

  return (
    <ScrollView>
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
  buttonBlock: {}
});
