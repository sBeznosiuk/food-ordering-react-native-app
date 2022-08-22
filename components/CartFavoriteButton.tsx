import React, {FC} from 'react';
import {StyleSheet, TouchableOpacity, TouchableOpacityProps} from 'react-native';

import {HeartIcon} from './HeartIcon';

interface CartFavoriteButtonProps extends TouchableOpacityProps {
  backgroundColor: string;
}

export const CartFavoriteButton: FC<CartFavoriteButtonProps> = ({backgroundColor, ...props}) => (
  <TouchableOpacity {...props} style={[styles.iconContainer, {backgroundColor}]}>
    <HeartIcon color="#fff" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  iconContainer: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#DF2C2C',
    marginRight: 15,

    justifyContent: 'center',
    alignItems: 'center',
  },
});
