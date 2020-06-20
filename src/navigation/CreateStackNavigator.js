import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CreateScreen} from '../screens/CreateScreen';
import {THEME} from '../theme';
import {HeaderButtonIcon} from '../components/HeaderButtonIcon';

const AppStack = createStackNavigator();

export const CreateStackNavigator = () => {
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
        name="Create"
        component={CreateScreen}
        options={({navigation}) => ({
          title: 'Create',
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
