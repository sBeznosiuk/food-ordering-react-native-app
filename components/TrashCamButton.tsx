import React, {FC} from 'react';
import {Image, StyleSheet, TouchableOpacity, TouchableOpacityProps} from 'react-native';

import trashCanItem from '../assets/trash-can.png';

export const TrashCanButton: FC<TouchableOpacityProps> = props => (
  <TouchableOpacity {...props} style={styles.iconContainer}>
    <Image source={trashCanItem} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  iconContainer: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#DF2C2C',

    justifyContent: 'center',
    alignItems: 'center',
  },
});
