import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AboutScreen} from '../screens/AboutScreen';
import {CreateScreen} from '../screens/CreateScreen';
import {PostScreen} from '../screens/PostScreen';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {AppHeaderIcon} from '../components/AppHeaderIcon';
import {THEME} from '../theme';
import {TabNavigation} from './TabNavigation';

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
        options={({route, navigation}) => ({
          title: `${route.params.text}`,
          headerRight: route.params.booked
            ?
            () => HeaderButtonCreator(
              'ios-star',
              'ios-star',
              () => {
                navigation.navigate('About');
              }
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
