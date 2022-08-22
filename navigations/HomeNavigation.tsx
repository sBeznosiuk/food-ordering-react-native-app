import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import {Color} from 'react-native-svg';

import {HeartIcon} from '../components/HeartIcon';
import {HistoryIcon} from '../components/HistoryIcon';
import {HomeIcon} from '../components/HomeIcon';
import {UserIcon} from '../components/UserIcon';
import {FoodFavorites} from '../screens/home/FoodFavorites';
import {History} from '../screens/home/History/History';
import {HomePage} from '../screens/home/HomePage';
import {Profile} from '../screens/home/Profile/Profile';
import {PrimaryColors} from '../utils/colors';
import {
  HomeNavigationParams,
  HomeNavigationRoutes,
} from './params/HomeNavigationParams';

const mapIcons: {
  [key in HomeNavigationRoutes]: FC<{
    color: Color;
    focused: boolean;
  }>;
} = {
  [HomeNavigationRoutes.Home]: HomeIcon,
  [HomeNavigationRoutes.Favorites]: HeartIcon,
  [HomeNavigationRoutes.ProfilePage]: UserIcon,
  [HomeNavigationRoutes.HistoryPage]: HistoryIcon,
};

const Tab =
  createBottomTabNavigator<HomeNavigationParams>();

export const HomeNavigation: FC = () => (
  <Tab.Navigator
    id="HomeNavigation"
    screenOptions={({route}) => ({
      tabBarStyle: styles.tabBarStyle,
      headerShown: false,
      tabBarShowLabel: false,
      tabBarActiveTintColor: PrimaryColors.Orange,

      tabBarIcon: ({color, focused}) => {
        const Icon = mapIcons[route.name];
        return <Icon color={color} focused={focused} />;
      },
    })}>
    <Tab.Screen
      name={HomeNavigationRoutes.Home}
      component={HomePage}
    />
    <Tab.Screen
      name={HomeNavigationRoutes.Favorites}
      component={FoodFavorites}
    />
    <Tab.Screen
      name={HomeNavigationRoutes.ProfilePage}
      component={Profile}
    />
    <Tab.Screen
      name={HomeNavigationRoutes.HistoryPage}
      component={History}
    />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: PrimaryColors.Grey,
    elevation: 0,
    borderTopColor: 'transparent',
  },
});
