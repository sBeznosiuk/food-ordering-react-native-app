import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import React, {FC, useContext} from 'react';
import {StyleSheet, View} from 'react-native';

import {useStore} from '../../store/StoreContext';
import {
  ThemeContext,
  Themes,
} from '../../utils/themes/themes';
import {useAppTranslation} from '../../utils/TranslationContext';
import {MainNavigationRoutes} from '../params/AppNavigationParams';
import {SideMenuRoutes} from './SideMenuNavigation';

export const DrawerContent: FC<
  DrawerContentComponentProps
> = props => {
  const {theme, setTheme} = useContext(ThemeContext);
  const {userStore} = useStore();
  const {t} = useAppTranslation();

  const handleProceedToLocalization = () =>
    props.navigation.navigate(
      SideMenuRoutes.LocalizationPage,
    );

  const handleProcceedToHome = () =>
    props.navigation.navigate(SideMenuRoutes.Home);

  const handleChangeTheme = () =>
    setTheme(current =>
      current === Themes.Light ? Themes.Dark : Themes.Light,
    );

  const handleSignOut = () => {
    userStore.signOut();
    props.navigation.navigate(
      MainNavigationRoutes.AuthTabs,
    );
  };

  const themeTranslation = t(
    theme === Themes.Light ? 'lightTheme' : 'darkTheme',
  );

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.drawerContentContainer}>
      <View>
        <DrawerItem
          label={t('home')}
          onPress={handleProcceedToHome}
        />
        <DrawerItem
          label={t('localization')}
          onPress={handleProceedToLocalization}
        />
        <DrawerItem
          label={themeTranslation}
          onPress={handleChangeTheme}
        />
      </View>
      <DrawerItem
        label={t('signOut')}
        onPress={handleSignOut}
      />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContentContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 80,
  },
});
