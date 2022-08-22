import {CompositeScreenProps} from '@react-navigation/native';
import {observer} from 'mobx-react-lite';
import React, {FC, useEffect} from 'react';
import {
  FlatList,
  Image,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import modalIcon from '../../../assets/modalIcon.png';
import {CartButton} from '../../../components/CartButton';
import {Order} from '../../../models/Order';
import {
  MainNavigationRoutes,
  MainNavigationScreenType,
} from '../../../navigations/params/AppNavigationParams';
import {
  HomeNavigationRoutes,
  HomeNavigationScreenType,
} from '../../../navigations/params/HomeNavigationParams';
import {OperationsNavigationRoutes} from '../../../navigations/params/OperationNavigationParams';
import {useStore} from '../../../store/StoreContext';
import {useAppTranslation} from '../../../utils/TranslationContext';
import {HistoryItem} from './HistoryItem';
import {NoHistory} from './NoHistory';

export const History: FC<
  CompositeScreenProps<
    HomeNavigationScreenType<HomeNavigationRoutes.HistoryPage>,
    MainNavigationScreenType<MainNavigationRoutes.MainTabs>
  >
> = observer(({navigation}) => {
  const {historyStore} = useStore();
  const {t} = useAppTranslation();

  const handleProceedToDetails = (item: Order) => {
    navigation.navigate(MainNavigationRoutes.Operations, {
      screen: OperationsNavigationRoutes.OrderDetails,
      params: item,
    });
  };

  const handleProceedToCart = () =>
    navigation.navigate(MainNavigationRoutes.Operations, {
      screen: OperationsNavigationRoutes.Cart,
    });

  useEffect(() => {
    historyStore.fetchOrderHistory();
  }, []);

  const renderItem = ({
    item,
  }: ListRenderItemInfo<Order>) => (
    <HistoryItem
      item={item}
      handleProceedToDetails={handleProceedToDetails}
    />
  );

  return (
    <View style={styles.screenContainer}>
      <View style={styles.textContainer}>
        <View style={styles.iconContainer}>
          <Image source={modalIcon} />
          <CartButton onPress={handleProceedToCart} />
        </View>
        <Text style={styles.textStyle}>
          {t('historyPageHeader')}
        </Text>
      </View>
      <FlatList
        renderItem={renderItem}
        data={historyStore.foods}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<NoHistory />}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  textStyle: {
    color: '#000',
    width: 190,
    fontSize: 34,
    fontWeight: '700',

    marginTop: 40,
  },
  textContainer: {
    marginBottom: 15,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginTop: 15,
  },
  screenContainer: {
    flex: 1,
    paddingHorizontal: 35,
  },
});
