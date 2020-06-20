import React from 'react';
import {Ionicons} from '@expo/vector-icons';
import {
  HeaderButton,
  HeaderButtons,
  Item,
} from 'react-navigation-header-buttons';
import {THEME} from '../theme';

const HeaderButtonComponent = props => {
  return (
    <HeaderButton
      {...props}
      iconSize={24}
      color={THEME.TEXT_COLOR}
      IconComponent={Ionicons}
    />
  );
};

export const HeaderButtonIcon = ({icon, iconTitle, onPressHandler}) => (
  <HeaderButtons
    HeaderButtonComponent={HeaderButtonComponent}>
    <Item
      title={iconTitle}
      iconName={icon}
      onPress={onPressHandler}
    />
  </HeaderButtons>);
