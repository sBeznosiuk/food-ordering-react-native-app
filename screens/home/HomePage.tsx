import {CompositeScreenProps} from '@react-navigation/native';
import React, {
  FC,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import modalIcon from '../../assets/modalIcon.png';
import searchIcon from '../../assets/searchIcon.png';
import {CartButton} from '../../components/CartButton';
import {
  MainNavigationRoutes,
  MainNavigationScreenType,
} from '../../navigations/params/AppNavigationParams';
import {
  HomeNavigationRoutes,
  HomeNavigationScreenType,
} from '../../navigations/params/HomeNavigationParams';
import {OperationsNavigationRoutes} from '../../navigations/params/OperationNavigationParams';
import {useStore} from '../../store/StoreContext';
import {useAppTranslation} from '../../utils/TranslationContext';
import {Foods} from './Foods';

export const HomePage: FC<
  CompositeScreenProps<
    HomeNavigationScreenType<HomeNavigationRoutes.Home>,
    MainNavigationScreenType<MainNavigationRoutes.MainTabs>
  >
> = ({navigation}) => {
  const {userStore} = useStore();
  const [query, setQuery] = useState('');

  const {t} = useAppTranslation();

  const handleModal = () => {
    navigation.navigate(MainNavigationRoutes.Operations, {
      screen: OperationsNavigationRoutes.Search,
    });
  };

  const handleProceedToCart = () => {
    navigation.navigate(MainNavigationRoutes.Operations, {
      screen: OperationsNavigationRoutes.Cart,
    });
  };

  useEffect(() => {
    userStore.fetchUser();
  }, []);

  return (
    <>
      <View style={styles.textContainer}>
        <View style={styles.iconContainer}>
          <Image source={modalIcon} />
          <CartButton onPress={handleProceedToCart} />
        </View>
        <Text style={styles.textStyle}>
          {t('homePageHeader')}
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputStyle}
            onChangeText={setQuery}
            onFocus={handleModal}
            value={query}
          />
          <Image
            style={styles.searchIcon}
            source={searchIcon}
          />
        </View>
      </View>
      <Foods />
    </>
  );
};

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
  },
  textContainer: {
    marginBottom: 15,
    paddingHorizontal: 35,
  },
  inputStyle: {
    borderRadius: 30,
    backgroundColor: '#EFEEEE',

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
});
