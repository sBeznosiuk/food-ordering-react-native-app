import React, {FC} from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

import {HeartIcon} from './HeartIcon';
import {PrimaryColors} from '../utils/colors';

interface FavoriteButtonProps extends TouchableOpacityProps {
  inFavorites: boolean;
}

export const FavoriteButton: FC<FavoriteButtonProps> = ({inFavorites, ...props}) => (
  <TouchableOpacity {...props}>
    <HeartIcon color={inFavorites ? PrimaryColors.Orange : PrimaryColors.DarkGrey} />
  </TouchableOpacity>
);
