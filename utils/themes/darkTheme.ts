import {Theme} from '@react-navigation/native';

import {PrimaryColors} from '../colors';

export const DarkTheme: Theme = {
  dark: true,
  colors: {
    primary: PrimaryColors.Orange,
    background: PrimaryColors.DarkGrey,
    card: '#000000',
    text: PrimaryColors.White,
    border: PrimaryColors.White,
    notification: PrimaryColors.Grey,
  },
};
