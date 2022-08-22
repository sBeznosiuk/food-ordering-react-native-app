import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {RouteProp} from '@react-navigation/native';

export enum HomeNavigationRoutes {
  Home = 'HomePage',
  Favorites = 'FoodFavorites',
  ProfilePage = 'Profile',
  HistoryPage = 'History',
}

export type HomeNavigationParams = {
  [HomeNavigationRoutes.Home]: undefined;
  [HomeNavigationRoutes.Favorites]: undefined;
  [HomeNavigationRoutes.ProfilePage]: undefined;
  [HomeNavigationRoutes.HistoryPage]: undefined;
};

export interface HomeNavigationScreenType<
  S extends HomeNavigationRoutes,
> {
  navigation: BottomTabNavigationProp<
    HomeNavigationParams,
    S
  >;
  route: RouteProp<HomeNavigationParams, S>;
}
