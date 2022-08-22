import {Theme} from '@react-navigation/native';

import {PrimaryColors} from '../colors';

export const LightTheme: Theme = {
  dark: false,
  colors: {
    primary: PrimaryColors.White,
    background: PrimaryColors.Grey,
    card: PrimaryColors.White,
    text: '#000',
    border: PrimaryColors.White,
    notification: PrimaryColors.Grey,
  },
};
