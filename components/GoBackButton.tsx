import React, {FC} from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {Image, TouchableOpacity} from 'react-native';

import backIcon from '../assets/chevron-left.png';

interface GoBackButtonProps {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

export const GoBackButton: FC<GoBackButtonProps> = ({onPress, style}) => (
  <TouchableOpacity style={style} onPress={onPress}>
    <Image source={backIcon} />
  </TouchableOpacity>
);
