import React from 'react';
import {View, StyleSheet, Text, Button, FlatList} from 'react-native';
import {DATA} from '../data';
import {Post} from '../components/Post';

export const MainScreen = ({navigation}) => {

  const onPressHandler = post => {
    navigation.navigate('Post', {...post, onRemove});
  };

  const onRemove = () => {
    console.log('delete');
  };


  return (
    <View>
      <FlatList
        data={DATA}
        keyExtractor={post => post.id.toString()}
        renderItem={({item}) => <Post post={item} onPress={onPressHandler}/>}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
