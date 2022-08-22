import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React, {FC} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  View,
} from 'react-native';

import logo from '../assets/Bella_Olonje_logo_111_1.png';
import {LoginPage} from '../screens/auth/LoginPage';
import {RegistrationPage} from '../screens/auth/RegistrationPage';
import {PrimaryColors} from '../utils/colors';
import {
  AuthNavigationRoutes,
  AuthStackParams,
} from './params/AuthNavigationParams';

const Tab =
  createMaterialTopTabNavigator<AuthStackParams>();

export const AuthNavigation: FC = () => (
  <>
    <View style={styles.imageContainer}>
      <Image style={styles.logo} source={logo} />
    </View>
    <Tab.Navigator
      style={{backgroundColor: PrimaryColors.Grey}}
      screenOptions={{
        tabBarStyle: styles.tabBarStyle,
        tabBarIndicatorStyle: styles.tabBarIndicatorStyle,
        tabBarIndicatorContainerStyle:
          styles.tabBarIndicatorContainerStyle,
        tabBarLabelStyle: styles.tabBarLabelStyle,
      }}>
      <Tab.Screen
        name={AuthNavigationRoutes.Login}
        component={LoginPage}
      />
      <Tab.Screen
        name={AuthNavigationRoutes.SignUp}
        component={RegistrationPage}
      />
    </Tab.Navigator>
  </>
);

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: PrimaryColors.White,
    height: 200,
  },
  logo: {
    maxHeight: 150,
    resizeMode: 'contain',
  },

  tabBarIndicatorContainerStyle: {
    width: (width - 60) / 2,
    marginLeft: 60,
  },
  tabBarIndicatorStyle: {
    flex: 1,

    backgroundColor: PrimaryColors.Orange,
  },
  tabBarStyle: {
    flex: 0.2,
    backgroundColor: PrimaryColors.White,
    justifyContent: 'flex-end',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  tabBarLabelStyle: {
    textTransform: 'capitalize',
  },
});
