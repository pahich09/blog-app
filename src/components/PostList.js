import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Post} from './Post';

export const PostList = ({data, navigation}) => {

  const onPressHandler = post => {
    navigation.navigate('Post', {
      id: post.id
    });
  };

  return (
    <View style={styles.wrap}>
      <FlatList
        data={data}
        keyExtractor={post => post.id.toString()}
        renderItem={({item}) => <Post post={item} onPress={onPressHandler}/>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    padding: 10
  }
});
