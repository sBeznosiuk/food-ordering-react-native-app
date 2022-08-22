import {CompositeScreenProps} from '@react-navigation/native';
import React, {FC} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import backgroundImage from '../../assets/background_onboarding-image.png';
import logo from '../../assets/Bella_Olonje_logo_111_1.png';
import {
  ButtonType,
  SubmitButton,
} from '../../components/SubmitButton';
import {
  MainNavigationRoutes,
  MainNavigationScreenType,
} from '../../navigations/params/AppNavigationParams';
import {
  OperationsNavigationRoutes,
  OperationsNavigationScreenType,
} from '../../navigations/params/OperationNavigationParams';
import {PrimaryColors} from '../../utils/colors';
import {useAppTranslation} from '../../utils/TranslationContext';

export const OnBoardingPage: FC<
  CompositeScreenProps<
    OperationsNavigationScreenType<OperationsNavigationRoutes.OnBoarding>,
    MainNavigationScreenType<MainNavigationRoutes.Operations>
  >
> = ({navigation}) => {
  const {t} = useAppTranslation();

  const handleClick = () =>
    navigation.navigate(MainNavigationRoutes.AuthTabs);

  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Image style={styles.logo} source={logo} />
      </View>
      <View style={styles.contentContainer}>
        <Image
          style={styles.backgroundImage}
          source={backgroundImage}
        />
        <Text style={styles.text}>Food for Everyone</Text>
      </View>
      <SubmitButton
        onPress={handleClick}
        buttonType={ButtonType.White}
        title={t('getStarted')}
      />
    </View>
  );
};

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#FF4B3A',
  },
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: PrimaryColors.White,
    width: 73,
    height: 73,
    borderRadius: 50,
    marginLeft: 30,
  },
  logo: {
    width: 40.22,
    height: 49.65,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  text: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 65,

    position: 'absolute',
    left: 30,
    top: 0,

    color: PrimaryColors.White,
  },
  backgroundImage: {
    position: 'absolute',
    width: width,

    top: 150,
  },
});
