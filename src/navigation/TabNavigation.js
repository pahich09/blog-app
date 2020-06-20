import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';
import {MainScreen} from '../screens/MainScreen';
import {THEME} from '../theme';
import {BookedScreen} from '../screens/BookedScreen';

const Tab = createMaterialBottomTabNavigator();


export const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      shifting ={true}
      barStyle={{ backgroundColor: THEME.MAIN_COLOR }}
    >
      <Tab.Screen
        name="Home"
        component={MainScreen}
        options={{
          tabBarLabel: 'Все посты',
          tabBarIcon: (info) => (
            <Ionicons
              name="ios-albums"
              size={24}
              color={info.color}
            />
          ),
        }}/>
      <Tab.Screen
        name="Booked"
        component={BookedScreen}
        options={{
          tabBarLabel: 'Избранное',
          tabBarIcon: (info) => (
            <Ionicons
              name="md-star"
              size={24}
              color={info.color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
