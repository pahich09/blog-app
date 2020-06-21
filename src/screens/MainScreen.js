import React from 'react';
import {DATA} from '../data';
import {Post} from '../components/Post';
import {PostList} from '../components/PostList';

export const MainScreen = ({navigation}) => {

  const onPressHandler = post => {
    navigation.navigate('Post', JSON.stringify({...post, onRemove}));
  };

  const onRemove = () => {
    alert('delete');
  };

  return (<PostList DATA={DATA} onPress={onPressHandler}/>);
};


