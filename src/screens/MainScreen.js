import React, {useEffect} from 'react';
import {PostList} from '../components/PostList';
import {useDispatch, useSelector} from 'react-redux';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {loadPosts} from '../store/actions/postAction';
import {THEME} from '../theme';


export const MainScreen = ({navigation}) => {
  const loading = useSelector(state => state.post.loading);
  const posts = useSelector(state => state.post.allPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size={40} color={THEME.MAIN_COLOR}/>
      </View>
    );
  }

  return (<PostList data={posts} navigation={navigation}/>);
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
