import React from 'react';
import {View, Text} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {MainScreen} from '../screens/MainScreen';
import {AboutScreen} from '../screens/AboutScreen';
import {CreateScreen} from '../screens/CreateScreen';
import {PostScreen} from '../screens/PostScreen';


const AppStack = createStackNavigator();

export function AppNavigation() {
  return (
    <AppStack.Navigator initialRouteName="Home">
      <AppStack.Screen
        name="Home"
        component={MainScreen}
        options={{title: 'Home page'}}
      />
      <AppStack.Screen
        name="About"
        component={AboutScreen}
        options={{title: 'About page'}}
      />
      <AppStack.Screen name="Create" component={CreateScreen}/>
      <AppStack.Screen name="Post" component={PostScreen}/>
    </AppStack.Navigator>
  );
}
