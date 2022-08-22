import {CompositeScreenProps} from '@react-navigation/native';
import React, {FC, useContext} from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {GoBackButton} from '../../../components/GoBackButton';
import {Loader} from '../../../components/Loader';
import {
  ButtonType,
  SubmitButton,
} from '../../../components/SubmitButton';
import {CartFood} from '../../../models/CartFood';
import {
  MainNavigationRoutes,
  MainNavigationScreenType,
} from '../../../navigations/params/AppNavigationParams';
import {
  OperationsNavigationRoutes,
  OperationsNavigationScreenType,
} from '../../../navigations/params/OperationNavigationParams';
import {StoreContext} from '../../../store/StoreContext';
import {OrderInformation} from './OrderInformation';
import {OrderItem} from './OrderItem';

export const OrderDetails: FC<
  CompositeScreenProps<
    OperationsNavigationScreenType<OperationsNavigationRoutes.OrderDetails>,
    MainNavigationScreenType<MainNavigationRoutes.Operations>
  >
> = ({navigation, route}) => {
  const {cartStore} = useStore();
  const order = route.params;

  const renderItem = ({
    item,
  }: ListRenderItemInfo<CartFood>) => (
    <OrderItem item={item} />
  );

  const handleReorder = () => {
    cartStore.reorderCart(order.items);
    navigation.navigate(MainNavigationRoutes.Operations, {
      screen: OperationsNavigationRoutes.Cart,
    });
  };
  return (
    <View style={styles.contentContainer}>
      <View style={styles.navigationContainer}>
        <GoBackButton onPress={navigation.goBack} />
        <Text style={styles.navigationText}>
          Order details
        </Text>
      </View>

      <FlatList
        data={order.items}
        renderItem={renderItem}
        ListEmptyComponent={<Loader />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <OrderInformation order={order} />
        }
      />
      <SubmitButton
        buttonType={ButtonType.Orange}
        title="Reorder"
        onPress={handleReorder}
      />
    </View>
  );
};

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
});
