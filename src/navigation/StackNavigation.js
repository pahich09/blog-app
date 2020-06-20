import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {PostScreen} from '../screens/PostScreen';
import {HeaderButtonIcon} from '../components/HeaderButtonIcon';
import {THEME} from '../theme';
import {TabNavigation} from './TabNavigation';

const AppStack = createStackNavigator();

export function StackNavigation() {
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
        name="TabNavigation"
        component={TabNavigation}
        options={({navigation}) => ({
          title: 'Мой блог',
          headerRight: () => (<HeaderButtonIcon
            icon='ios-camera'
            iconTitle='photo'
            onPressHandler={() => {
              navigation.navigate('Create');
            }}
          />),
          headerLeft: () => (<HeaderButtonIcon
            icon='ios-menu'
            iconTitle='Menu'
            onPressHandler={() => {
              navigation.toggleDrawer();
            }}
          />),
        })}
      />
      <AppStack.Screen
        name="Post"
        component={PostScreen}
        options={({route, navigation}) => ({
          title: `${route.params.text}`,
          headerRight: () => route.params.booked
            ?
            <HeaderButtonIcon
              icon='ios-star'
              iconTitle='Star'
              onPressHandler={() => {
                alert('star');
              }}
            />
            :
            <HeaderButtonIcon
              icon='ios-star-outline'
              iconTitle='Star'
              onPressHandler={() => {
                alert('star');
              }}
            />
        })}
      />
    </AppStack.Navigator>
  );
}
