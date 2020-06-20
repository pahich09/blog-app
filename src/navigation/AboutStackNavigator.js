import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AboutScreen} from '../screens/AboutScreen';
import {THEME} from '../theme';
import {HeaderButtonIcon} from '../components/HeaderButtonIcon';

const AppStack = createStackNavigator();

export const AboutStackNavigator = () => {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: THEME.MAIN_COLOR,
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontFamily: 'open-bold',
        },
      }}
    >
      <AppStack.Screen
        name="About"
        component={AboutScreen}
        options={({navigation}) => ({
          title: 'About',
          headerLeft: () => (<HeaderButtonIcon
            icon='ios-menu'
            iconTitle='Menu'
            onPressHandler={() => {
              navigation.toggleDrawer();
            }}
          />),
        })}
      />
    </AppStack.Navigator>
  );
};
