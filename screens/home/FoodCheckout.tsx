import {CompositeScreenProps} from '@react-navigation/native';
import {observer} from 'mobx-react-lite';
import React, {FC, useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import bankIcon from '../../assets/bankIcon.png';
import cardIcon from '../../assets/cardIcon.png';
import {Checkbox} from '../../components/Checkbox';
import {GoBackButton} from '../../components/GoBackButton';
import {PaymentModal} from '../../components/PaymentModal';
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
import {PaymentMethods} from '../../store/CartStore';
import {useStore} from '../../store/StoreContext';
import {PrimaryColors} from '../../utils/colors';
import {useAppTranslation} from '../../utils/TranslationContext';

export enum DeliveryMethods {
  Door = 'DoorDelivery',
  PickUp = 'PickUp',
}

export const FoodCheckout: FC<
  CompositeScreenProps<
    OperationsNavigationScreenType<OperationsNavigationRoutes.Checkout>,
    MainNavigationScreenType<MainNavigationRoutes.Operations>
  >
> = observer(({navigation}) => {
  const {cartStore, historyStore} = useStore();
  const [modalIsActive, setModalIsActive] = useState(false);
  const {t} = useAppTranslation();

  const handleChooseCard = () => {
    cartStore.setPaymentMethod(PaymentMethods.Card);
  };
  const handleChooseBank = () => {
    cartStore.setPaymentMethod(PaymentMethods.BankAccount);
  };
  const handleChooseDoor = () => {
    cartStore.setDeliveryMethod(DeliveryMethods.Door);
  };
  const handleChoosePickUp = () => {
    cartStore.setDeliveryMethod(DeliveryMethods.PickUp);
  };

  const handleProceed = () => setModalIsActive(true);

  const handleModalAccept = () => {
    historyStore.createFoodOrder(
      cartStore.cart,
      cartStore.deliveryMethod,
      cartStore.paymentMethod,
    );

    navigation.navigate(MainNavigationRoutes.MainTabs);
  };

  const handleModalCancel = () => setModalIsActive(false);

  return (
    <ScrollView>
      <View style={styles.contentContainer}>
        <View style={styles.navigationContainer}>
          <GoBackButton onPress={navigation.goBack} />
          <Text style={styles.navigationText}>
            {t('checkout')}
          </Text>
        </View>
        <Text style={styles.deliveryText}>
          {t('deliveryMethod')}
        </Text>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionHeader}>
            {t('addressDerails')}
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
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionHeader}>
            {t('deliveryMethods')}
          </Text>
          <View style={styles.checkboxContainer}>
            <Checkbox
              isTriggered={
                cartStore.deliveryMethod ===
                DeliveryMethods.Door
              }
              onPress={handleChooseDoor}
              text={t('doorDelivery')}
              checkboxStyles={styles.cardCheckboxStyles}
            />
            <Checkbox
              isTriggered={
                cartStore.deliveryMethod ===
                DeliveryMethods.PickUp
              }
              onPress={handleChoosePickUp}
              text={t('pickUp')}
              checkboxStyles={styles.bankCheckboxStyles}
            />
          </View>
        </View>
        <SubmitButton
          buttonType={ButtonType.Orange}
          title={t('proceed')}
          disabled={
            !cartStore.paymentMethod ||
            !cartStore.deliveryMethod
          }
          onPress={handleProceed}
        />
      </View>
      <PaymentModal
        transparent
        visible={modalIsActive}
        animationType="fade"
        handleAccept={handleModalAccept}
        handleCancel={handleModalCancel}
      />
    </ScrollView>
  );
});

const {width} = Dimensions.get('window');
const screenPadding = 30;

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: screenPadding,
    alignItems: 'center',
    flex: 1,
  },
  navigationContainer: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 15,
  },
  navigationText: {
    flex: 1,
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 18,
    color: '#000',
  },
  deliveryText: {
    fontWeight: '700',
    fontSize: 34,
    color: '#000',
    marginRight: 'auto',
    marginBottom: 45,
    marginTop: 40,
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
