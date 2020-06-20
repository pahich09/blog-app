import React from 'react';
import {View, Text, Button} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {MainScreen} from '../screens/MainScreen';
import {AboutScreen} from '../screens/AboutScreen';
import {CreateScreen} from '../screens/CreateScreen';
import {PostScreen} from '../screens/PostScreen';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {AppHeaderIcon} from '../components/AppHeaderIcon';


const AppStack = createStackNavigator();

const HeaderButtonCreator = (icon, iconTitle, onPressHandler) => (<HeaderButtons
  HeaderButtonComponent={AppHeaderIcon}>
  <Item
    title={iconTitle}
    iconName={icon}
    onPress={onPressHandler}
  />
</HeaderButtons>);


export function AppNavigation() {
  return (
    <AppStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#e05e28',
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontFamily: 'open-bold',
        },
      }}
    >
      <AppStack.Screen
        name="Home"
        component={MainScreen}
        options={{
          title: 'Мой блог',
          headerRight: () => HeaderButtonCreator(
            'ios-camera',
            'photo',
            () => {
              alert('press photo');
            }
          ),
          headerLeft: () => HeaderButtonCreator(
            'ios-menu',
            'Menu',
            () => {
              alert('press menu');
            }
          ),
        }}
      />
      <AppStack.Screen
        name="About"
        component={AboutScreen}
        options={{title: 'About page'}}
      />
      <AppStack.Screen name="Create" component={CreateScreen}/>
      <AppStack.Screen
        name="Post"
        component={PostScreen}
        options={({route}) => ({
          title: `${route.params.text}`,
          headerRight: route.params.booked
            ?
            () => HeaderButtonCreator(
              'ios-star',
              'ios-star',
              () => alert('press star')
            )
            :
            () => HeaderButtonCreator(
              'ios-star-outline',
              'ios-star-outline',
              () => alert('press star')
            )
        })}
      />
    </AppStack.Navigator>
  );
}
