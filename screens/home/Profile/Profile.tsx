import {CompositeScreenProps} from '@react-navigation/native';
import {observer} from 'mobx-react-lite';
import React, {FC} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import bankIcon from '../../../assets/bankIcon.png';
import cardIcon from '../../../assets/cardIcon.png';
import modalIcon from '../../../assets/modalIcon.png';
import {CartButton} from '../../../components/CartButton';
import {Checkbox} from '../../../components/Checkbox';
import {
  MainNavigationRoutes,
  MainNavigationScreenType,
} from '../../../navigations/params/AppNavigationParams';
import {
  HomeNavigationRoutes,
  HomeNavigationScreenType,
} from '../../../navigations/params/HomeNavigationParams';
import {OperationsNavigationRoutes} from '../../../navigations/params/OperationNavigationParams';
import {PaymentMethods} from '../../../store/CartStore';
import {useStore} from '../../../store/StoreContext';
import {PrimaryColors} from '../../../utils/colors';
import {useAppTranslation} from '../../../utils/TranslationContext';
import {ProfileInformation} from './ProfileInformation';

export const Profile: FC<
  CompositeScreenProps<
    HomeNavigationScreenType<HomeNavigationRoutes.ProfilePage>,
    MainNavigationScreenType<MainNavigationRoutes.MainTabs>
  >
> = observer(({navigation}) => {
  const {cartStore, userStore} = useStore();
  const {t} = useAppTranslation();

  const handleChooseCard = () => {
    cartStore.setPaymentMethod(PaymentMethods.Card);
  };

  const handleChooseBank = () => {
    cartStore.setPaymentMethod(PaymentMethods.BankAccount);
  };

  const handleProceedToCart = () =>
    navigation.navigate(MainNavigationRoutes.Operations, {
      screen: OperationsNavigationRoutes.Cart,
    });

  return (
    <ScrollView
      contentContainerStyle={styles.contentContainer}>
      <View style={styles.textContainer}>
        <View style={styles.iconContainer}>
          <Image source={modalIcon} />
          <CartButton onPress={handleProceedToCart} />
        </View>
        <Text style={styles.textStyle}>
          {t('profilePageHeader')}
        </Text>
      </View>
      <ProfileInformation user={userStore.user} />
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeader}>
          {t('paymentMethod')}
        </Text>
        <View style={styles.checkboxContainer}>
          <Checkbox
            isTriggered={
              cartStore.paymentMethod ===
              PaymentMethods.Card
            }
            onPress={handleChooseCard}
            text="Card"
            icon={cardIcon}
            iconStyles={styles.cardIconStyles}
            checkboxStyles={styles.cardCheckboxStyles}
          />
          <Checkbox
            isTriggered={
              cartStore.paymentMethod ===
              PaymentMethods.BankAccount
            }
            onPress={handleChooseBank}
            text="Bank account"
            icon={bankIcon}
            iconStyles={styles.bankIconStyles}
            checkboxStyles={styles.bankCheckboxStyles}
          />
        </View>
      </View>
    </ScrollView>
  );
});

const {width} = Dimensions.get('window');
const screenPadding = 30;

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 35,
  },
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

  sectionHeader: {
    fontWeight: '700',
    fontSize: 17,
    color: '#000',
    marginRight: 'auto',
    marginBottom: 20,
  },
  sectionContainer: {
    flex: 0.2,
    marginTop: 20,
  },
  checkboxContainer: {
    width: width - screenPadding * 2,
    backgroundColor: PrimaryColors.White,
    borderRadius: 20,
    paddingHorizontal: 22,
  },
  cardIconStyles: {
    backgroundColor: PrimaryColors.Orange,
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  },
  bankIconStyles: {
    backgroundColor: '#EB4796',
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  },
  cardCheckboxStyles: {
    paddingVertical: 30,
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(0, 0, 0, 0.5)',
  },
  bankCheckboxStyles: {
    paddingVertical: 30,
  },
});
