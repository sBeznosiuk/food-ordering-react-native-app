import {CompositeScreenProps} from '@react-navigation/native';
import {observer} from 'mobx-react-lite';
import React, {FC} from 'react';
import {
  Image,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

import swipeIcon from '../../assets/iwwa_swipe.png';
import {GoBackButton} from '../../components/GoBackButton';
import {Loader} from '../../components/Loader';
import {
  ButtonType,
  SubmitButton,
} from '../../components/SubmitButton';
import {CartFood} from '../../models/CartFood';
import {
  MainNavigationRoutes,
  MainNavigationScreenType,
} from '../../navigations/params/AppNavigationParams';
import {
  OperationsNavigationRoutes,
  OperationsNavigationScreenType,
} from '../../navigations/params/OperationNavigationParams';
import {useStore} from '../../store/StoreContext';
import {useAppTranslation} from '../../utils/TranslationContext';
import {FoodCartItem} from './FoodCartItem';

export const FoodCart: FC<
  CompositeScreenProps<
    OperationsNavigationScreenType<OperationsNavigationRoutes.Cart>,
    MainNavigationScreenType<MainNavigationRoutes.Operations>
  >
> = observer(({navigation}) => {
  const {cartStore} = useStore();
  const {t} = useAppTranslation();

  const renderItem = ({
    item,
  }: ListRenderItemInfo<CartFood>) => (
    <FoodCartItem item={item} />
  );

  const onPress = () => {
    navigation.navigate(MainNavigationRoutes.Operations, {
      screen: OperationsNavigationRoutes.Checkout,
    });
  };

  return (
    <View style={styles.contentContainer}>
      <View style={styles.navigationContainer}>
        <GoBackButton onPress={navigation.goBack} />
        <Text style={styles.navigationText}>
          {t('cartHeader')}
        </Text>
      </View>
      <View style={styles.swipeInfoContainer}>
        <Image source={swipeIcon} />
        <Text style={styles.swipeInfoText}>
          {t('swipeInfo')}
        </Text>
      </View>
      <FlatList
        data={cartStore.cart}
        renderItem={renderItem}
        ListEmptyComponent={<Loader />}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={
          <SubmitButton
            buttonType={ButtonType.Orange}
            title={t('checkout')}
            onPress={onPress}
            disabled={!cartStore.cart.length}
          />
        }
      />
    </View>
  );
});

const styles = StyleSheet.create({
  contentContainer: {
    marginHorizontal: 30,
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
  swipeInfoContainer: {
    flexDirection: 'row',
  },
  swipeInfoText: {
    fontWeight: '400',
    fontSize: 12,
    color: '#000',
    marginBottom: 15,
    marginLeft: 5,
  },
});
