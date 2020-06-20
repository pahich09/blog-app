import React from 'react';
import {Ionicons} from '@expo/vector-icons';
import {HeaderButton,} from 'react-navigation-header-buttons';

export const AppHeaderIcon = props => {
  return (
    <HeaderButton
      {...props}
      iconSize={24}
      color={'#ffffff'}
      IconComponent={Ionicons}
    />
  );
};
