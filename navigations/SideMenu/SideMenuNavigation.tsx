import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';

import {Localization} from '../../screens/home/Localization';
import {HomeNavigation} from '../HomeNavigation';
import {HomeNavigationRoutes} from '../params/HomeNavigationParams';
import {DrawerContent} from './DrawerContent';

export enum SideMenuRoutes {
  Home = 'Home',
  LocalizationPage = 'Localization',
}

export type SideMenuNavigationParams = {
  [SideMenuRoutes.Home]: {screen: HomeNavigationRoutes};
  [SideMenuRoutes.LocalizationPage]: undefined;
};

const Drawer =
  createDrawerNavigator<SideMenuNavigationParams>();

export const SideMenuNavigation = () => (
  <Drawer.Navigator
    initialRouteName={SideMenuRoutes.Home}
    screenOptions={{headerShown: false}}
    drawerContent={props => <DrawerContent {...props} />}>
    <Drawer.Screen
      name={SideMenuRoutes.Home}
      component={HomeNavigation}
    />
    <Drawer.Screen
      name={SideMenuRoutes.LocalizationPage}
      component={Localization}
    />
  </Drawer.Navigator>
);
