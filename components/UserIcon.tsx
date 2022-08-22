import React, {FC} from 'react';
import Svg, {Path, Color} from 'react-native-svg';

interface UserIconProps {
  color: Color;
}

export const UserIcon: FC<UserIconProps> = ({color}) => (
  <Svg width={24} height={24} fill="none" viewBox="0 0 32 32" strokeWidth={2.5}>
    <Path
      stroke={color}
      stroke-linejoin="round"
      stroke-linecap="round"
      stroke-width={1}
      d="M26.667 28v-2.667c0-1.415-0.562-2.771-1.562-3.771s-2.357-1.562-3.771-1.562h-10.667c-1.415 0-2.771 0.562-3.771 1.562s-1.562 2.357-1.562 3.771v2.667"
    />
    <Path
      stroke={color}
      stroke-linejoin="round"
      stroke-linecap="round"
      stroke-width={4}
      d="M16 14.667c2.945 0 5.333-2.388 5.333-5.333s-2.388-5.333-5.333-5.333c-2.946 0-5.333 2.388-5.333 5.333s2.388 5.333 5.333 5.333z"
    />
  </Svg>
);
