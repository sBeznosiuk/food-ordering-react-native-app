import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {Food} from '../../models/Food';
import {Order as OrderModel} from '../../models/Order';

export enum OperationsNavigationRoutes {
  OnBoarding = 'OnBoarding',
  Search = 'FoodSearch',
  Details = 'FoodDetails',
  Cart = 'FoodCart',
  Checkout = 'FoodCheckout',
  OrderDetails = 'OrderDetails',
}

export type OperationsNavigationParams = {
  [OperationsNavigationRoutes.OnBoarding]: undefined;
  [OperationsNavigationRoutes.Search]: undefined;
  [OperationsNavigationRoutes.Details]: Food;
  [OperationsNavigationRoutes.Cart]: undefined;
  [OperationsNavigationRoutes.Checkout]: undefined;
  [OperationsNavigationRoutes.OrderDetails]: OrderModel;
};

export interface OperationsNavigationScreenType<
  S extends OperationsNavigationRoutes,
> {
  navigation: StackNavigationProp<
    OperationsNavigationParams,
    S
  >;
  route: RouteProp<OperationsNavigationParams, S>;
}
