import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {SideMenuRoutes} from '../SideMenu/SideMenuNavigation';
import {OperationsNavigationRoutes} from './OperationNavigationParams';

export enum MainNavigationRoutes {
  MainTabs = 'Home',
  AuthTabs = 'Auth',
  Operations = 'Operations',
  SideMenu = 'SideMenu',
}

export type MainNavigationParams = {
  [MainNavigationRoutes.AuthTabs]: undefined;
  [MainNavigationRoutes.MainTabs]: undefined;
  [MainNavigationRoutes.SideMenu]: {
    screen: SideMenuRoutes;
  };
  [MainNavigationRoutes.Operations]: {
    screen: OperationsNavigationRoutes;
  };
};

export interface MainNavigationScreenType<
  S extends MainNavigationRoutes,
> {
  navigation: StackNavigationProp<MainNavigationParams, S>;
  route: RouteProp<MainNavigationParams, S>;
}
