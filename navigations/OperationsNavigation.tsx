import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';

import {OnBoardingPage} from '../screens/auth/OnBoardingPage';
import {FoodCart} from '../screens/home/FoodCart';
import {FoodCheckout} from '../screens/home/FoodCheckout';
import {FoodDetails} from '../screens/home/FoodDetails';
import {FoodSearch} from '../screens/home/FoodSearch';
import {OrderDetails as Order} from '../screens/home/History/OrderDetails';
import {
  OperationsNavigationParams,
  OperationsNavigationRoutes,
} from './params/OperationNavigationParams';

const Stack = createNativeStackNavigator();

export const OperationsNavigation: FC<
  OperationsNavigationParams
> = () => (
  <Stack.Navigator
    id="OperationsNavigation"
    screenOptions={{headerShown: false}}
    initialRouteName={
      OperationsNavigationRoutes.OnBoarding
    }>
    <Stack.Screen
      name={OperationsNavigationRoutes.OnBoarding}
      component={OnBoardingPage}
    />
    <Stack.Screen
      name={OperationsNavigationRoutes.Cart}
      component={FoodCart}
    />
    <Stack.Screen
      name={OperationsNavigationRoutes.Checkout}
      component={FoodCheckout}
    />
    <Stack.Screen
      name={OperationsNavigationRoutes.OrderDetails}
      component={Order}
    />

    <Stack.Screen
      name={OperationsNavigationRoutes.Search}
      component={FoodSearch}
    />
    <Stack.Screen
      name={OperationsNavigationRoutes.Details}
      component={FoodDetails}
    />
  </Stack.Navigator>
);
