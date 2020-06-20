import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {StackNavigation} from './StackNavigation';
import {AboutStackNavigator} from './AboutStackNavigator';
import {CreateStackNavigator} from './CreateStackNavigator';

const Drawer = createDrawerNavigator();

export const MainNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={StackNavigation}/>
      <Drawer.Screen name="About" component={AboutStackNavigator}/>
      <Drawer.Screen name="Create" component={CreateStackNavigator}/>
    </Drawer.Navigator>
  );
};
