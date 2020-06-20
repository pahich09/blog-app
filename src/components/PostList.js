import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Post} from '../components/Post';

export const PostList = ({DATA, onPress}) => {
  return (
    <View style={styles.wrap}>
      <FlatList
        data={DATA}
        keyExtractor={post => post.id.toString()}
        renderItem={({item}) => <Post post={item} onPress={onPress}/>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    padding: 10
  }
});
