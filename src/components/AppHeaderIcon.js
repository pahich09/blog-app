import React from 'react';
import {Ionicons} from '@expo/vector-icons';
import {HeaderButton,} from 'react-navigation-header-buttons';
import {THEME} from '../theme';

export const AppHeaderIcon = props => {
  return (
    <HeaderButton
      {...props}
      iconSize={24}
      color={THEME.TEXT_COLOR}
      IconComponent={Ionicons}
    />
  );
};
