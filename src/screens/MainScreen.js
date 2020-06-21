import React, {useEffect} from 'react';
import {PostList} from '../components/PostList';
import {useDispatch, useSelector} from 'react-redux';
import {loadPosts} from '../store/actions/postAction';

export const MainScreen = ({navigation}) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  const posts = useSelector(state => state.post.allPosts);
  console.log(posts.length);

  return (<PostList data={posts} navigation={navigation}/>);
};


