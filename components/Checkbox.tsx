import React, {FC} from 'react';
import {
  Image,
  ImageProps,
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';

import {PrimaryColors} from '../utils/colors';

interface CheckboxProps extends TouchableOpacityProps {
  isTriggered: boolean;
  text: string;
  checkboxStyles?: StyleProp<ViewStyle>;
  icon?: ImageSourcePropType;
  iconStyles?: StyleProp<ViewStyle>;
}

export const Checkbox: FC<CheckboxProps> = ({isTriggered, text, checkboxStyles, icon, iconStyles, ...props}) => {
  const borderColor = isTriggered ? PrimaryColors.Orange : PrimaryColors.DarkGrey;

  return (
    <TouchableOpacity {...props}>
      <View style={[styles.checkboxContainer, checkboxStyles]}>
        <View style={[styles.checkbox, {borderColor}]}>{isTriggered ? <View style={styles.checkboxActive} /> : null}</View>
        <View style={iconStyles}>{icon ? <Image source={icon} /> : null}</View>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 16,
    height: 16,
    borderRadius: 8,
    paddingHorizontal: 3,
    paddingVertical: 3,
    borderWidth: 2,
  },
  checkboxActive: {
    flex: 1,
    borderRadius: 4,
    backgroundColor: PrimaryColors.Orange,
  },
  text: {
    fontWeight: '400',
    fontSize: 17,
    color: '#000',
    marginLeft: 16,
  },
});
