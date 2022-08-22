import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {observer} from 'mobx-react-lite';
import React, {FC, useContext} from 'react';

import {Loader} from '../components/Loader';
import {useStore} from '../store/StoreContext';
import {DarkTheme} from '../utils/themes/darkTheme';
import {LightTheme} from '../utils/themes/lightTheme';
import {ThemeContext, Themes} from '../utils/themes/themes';

import {AuthNavigation} from './AuthNavigation';
import {OperationsNavigation} from './OperationsNavigation';
import {
  MainNavigationParams,
  MainNavigationRoutes,
} from './params/AppNavigationParams';
import {SideMenuNavigation} from './SideMenu/SideMenuNavigation';

const Stack =
  createNativeStackNavigator<MainNavigationParams>();

export const AppNavigation: FC = observer(() => {
  const {userStore} = useStore();
  const {theme} = useContext(ThemeContext);

  const isAuthenticated = userStore.token;

  const initialRouteName = isAuthenticated
    ? MainNavigationRoutes.SideMenu
    : MainNavigationRoutes.Operations;

  return (
    <NavigationContainer
      theme={
        theme === Themes.Light ? LightTheme : DarkTheme
      }>
      <Stack.Navigator
        id="AppNavigation"
        initialRouteName={initialRouteName}
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={MainNavigationRoutes.Operations}
          component={OperationsNavigation}
        />
        <Stack.Screen
          name={MainNavigationRoutes.AuthTabs}
          component={AuthNavigation}
        />
        <Stack.Screen
          name={MainNavigationRoutes.SideMenu}
          component={SideMenuNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
});
