import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {PostScreen} from '../screens/PostScreen';
import {HeaderButtonIcon} from '../components/HeaderButtonIcon';
import {THEME} from '../theme';
import {TabNavigator} from './TabNavigator';

const AppStack = createStackNavigator();

export function HomeStackNavigator() {
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
        name="TabNavigator"
        component={TabNavigator}
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
        options={({route: {params}}) => ({
          title: params.title,
          headerRight: () =>
            <HeaderButtonIcon
              icon={params.isBooked ? 'ios-star' : 'ios-star-outline'}
              iconTitle='Star'
              onPressHandler={() => {
                params.toggleBookedHandler(params.id);
              }}
            />
        })}
      />

    </AppStack.Navigator>
  );
}
