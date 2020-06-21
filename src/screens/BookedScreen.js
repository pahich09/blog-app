import React from 'react';
import {PostList} from '../components/PostList';
import {useSelector} from 'react-redux';

export const BookedScreen = ({navigation}) => {

  const bookedPosts = useSelector(state => state.post.bookedPosts);

  return (<PostList
    navigation={navigation}
    data={bookedPosts}
  />);
};
