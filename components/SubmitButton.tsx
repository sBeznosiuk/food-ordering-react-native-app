import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';

import {PrimaryColors} from '../utils/colors';

interface ButtonProps extends TouchableOpacityProps {
  buttonType: ButtonType;
  title: string;
}

export enum ButtonType {
  Orange = 'Orange',
  White = 'White',
}

const buttonColorsMap: {[key in ButtonType]: string} = {
  [ButtonType.Orange]: PrimaryColors.Orange,
  [ButtonType.White]: PrimaryColors.White,
};

const buttonTextColorsMap: {[key in ButtonType]: string} = {
  [ButtonType.Orange]: PrimaryColors.White,
  [ButtonType.White]: PrimaryColors.Orange,
};

export const SubmitButton: FC<ButtonProps> = ({buttonType, title, style, ...props}) => (
  <TouchableOpacity
    {...props}
    style={[
      styles.buttonContainer,
      {
        backgroundColor: props.disabled ? PrimaryColors.DarkGrey : buttonColorsMap[buttonType],
      },
      style,
    ]}>
    <Text
      style={[
        styles.buttonText,
        {
          color: buttonTextColorsMap[buttonType],
        },
      ]}>
      {title}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: 30,
    height: 70,
    width: 300,
    borderRadius: 30,
  },

  buttonText: {
    fontWeight: 'bold',
  },
});
