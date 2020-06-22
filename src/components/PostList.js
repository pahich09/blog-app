import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Post} from './Post';

export const PostList = ({data, navigation}) => {

  const onPressHandler = post => {
    navigation.navigate('Post', {
      id: post.id
    });
  };

  if (!data.length) {
    return (
      <View style={styles.wrap}>
        <Text style={styles.noPosts}>
          Постов пока нет...
        </Text>
      </View>
    );
  }

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
  },
  noPosts: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'open-regular',
  }
});
