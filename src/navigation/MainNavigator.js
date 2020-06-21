import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {HomeStackNavigator} from './HomeStackNavigator';
import {AboutStackNavigator} from './AboutStackNavigator';
import {CreateStackNavigator} from './CreateStackNavigator';
import {THEME} from '../theme';

const Drawer = createDrawerNavigator();

export const MainNavigator = () => {
  return (
    <Drawer.Navigator
      drawerStyle={{
        paddingTop: 10,
        paddingLeft: 10
      }}
      drawerContentOptions={{
        activeTintColor: THEME.MAIN_COLOR,
        labelStyle: {
          fontFamily: 'open-bold',
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{drawerLabel: 'Главная'}}
      />
      <Drawer.Screen
        name="About"
        component={AboutStackNavigator}
        options={{drawerLabel: 'О Приложении'}}
      />
      <Drawer.Screen
        name="Create"
        component={CreateStackNavigator}
        options={{drawerLabel: 'Создать пост'}}
      />
    </Drawer.Navigator>
  );
};
