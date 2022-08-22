import {DrawerScreenProps} from '@react-navigation/drawer';
import {
  CompositeScreenProps,
  useTheme,
} from '@react-navigation/native';
import {observer} from 'mobx-react-lite';
import React, {FC} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import modalIcon from '../../assets/modalIcon.png';
import {CartButton} from '../../components/CartButton';
import {Checkbox} from '../../components/Checkbox';
import {
  MainNavigationRoutes,
  MainNavigationScreenType,
} from '../../navigations/params/AppNavigationParams';
import {OperationsNavigationRoutes} from '../../navigations/params/OperationNavigationParams';
import {
  SideMenuNavigationParams,
  SideMenuRoutes,
} from '../../navigations/SideMenu/SideMenuNavigation';
import {
  Languages,
  useAppTranslation,
} from '../../utils/TranslationContext';

export const Localization: FC<
  CompositeScreenProps<
    DrawerScreenProps<
      SideMenuNavigationParams,
      SideMenuRoutes.LocalizationPage
    >,
    MainNavigationScreenType<MainNavigationRoutes.SideMenu>
  >
> = observer(({navigation}) => {
  const {colors} = useTheme();
  const {t, changeLanguage, language} = useAppTranslation();

  const handleChooseEnglish = () =>
    changeLanguage(Languages.En);

  const handleChooseUkrainian = () =>
    changeLanguage(Languages.Ua);

  const handleProceedToCart = () =>
    navigation.navigate(MainNavigationRoutes.Operations, {
      screen: OperationsNavigationRoutes.Cart,
    });

  return (
    <View style={styles.screenContainer}>
      <View style={styles.textContainer}>
        <View style={styles.iconContainer}>
          <Image source={modalIcon} />
          <CartButton onPress={handleProceedToCart} />
        </View>
        <Text style={styles.textStyle}>
          {t('localization')}
        </Text>
      </View>
      <View style={styles.sectionContainer}>
        <View
          style={[
            styles.checkboxContainer,
            {backgroundColor: colors.background},
          ]}>
          <Checkbox
            isTriggered={language === Languages.En}
            onPress={handleChooseEnglish}
            text="English"
            checkboxStyles={styles.firstCheckbox}
          />
          <Checkbox
            isTriggered={language === Languages.Ua}
            onPress={handleChooseUkrainian}
            text="Українська"
            checkboxStyles={styles.secondCheckbox}
          />
        </View>
      </View>
    </View>
  );
});

const {width} = Dimensions.get('window');
const screenPadding = 30;

const styles = StyleSheet.create({
  textStyle: {
    color: '#000',
    width: 190,
    fontSize: 34,
    fontWeight: '700',

    marginTop: 40,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginTop: 15,
    marginRight: 30,
  },
  textContainer: {
    marginBottom: 15,
  },
  inputStyle: {
    borderRadius: 30,
    backgroundColor: '#EFEEEE',
    marginRight: 50,
    marginTop: 15,
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderColor: 'grey',
    height: 60,
    paddingLeft: 40,
  },
  inputContainer: {
    position: 'relative',
  },
  searchIcon: {
    position: 'absolute',
    top: 35,
    left: 15,
  },
  screenContainer: {
    marginHorizontal: 35,
    flex: 1,
  },
  sectionContainer: {
    flex: 0.2,
    marginTop: 20,
  },
  checkboxContainer: {
    width: width - screenPadding * 2,

    borderRadius: 20,
    paddingHorizontal: 22,
  },

  firstCheckbox: {
    paddingVertical: 30,
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(0, 0, 0, 0.5)',
  },
  secondCheckbox: {
    paddingVertical: 30,
  },
});
