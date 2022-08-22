import React, {FC} from 'react';
import {Image, TouchableOpacity, TouchableOpacityProps} from 'react-native';

import cartIcon from '../assets/shopping-cart.png';

export const CartButton: FC<TouchableOpacityProps> = props => (
  <TouchableOpacity {...props}>
    <Image source={cartIcon} />
  </TouchableOpacity>
);
