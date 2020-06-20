import React from 'react';
import {DATA} from '../data';
import {Post} from '../components/Post';
import {PostList} from '../components/PostList';

export const BookedScreen = ({navigation}) => {

  const onPressHandler = post => {
    navigation.navigate('Post', {...post, onRemove});
  };

  const onRemove = () => {
    alert('delete');
  };

  return (<PostList
    DATA={DATA.filter(post => post.booked)}
    onPress={onPressHandler}/>);
};
