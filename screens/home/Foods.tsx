import {useNavigation} from '@react-navigation/native';
import {observer} from 'mobx-react-lite';
import React, {FC, useContext, useEffect} from 'react';
import {
  ListRenderItemInfo,
  StyleSheet,
  View,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

import {Loader} from '../../components/Loader';
import {Food} from '../../models/Food';
import {MainNavigationRoutes} from '../../navigations/params/AppNavigationParams';
import {OperationsNavigationRoutes} from '../../navigations/params/OperationNavigationParams';
import {useStore} from '../../store/StoreContext';
import {FoodCategories} from './FoodCategories';
import {FoodItem} from './FoodItem';

export const Foods: FC = observer(() => {
  const {foodsStore} = useStore();

  const navigation = useNavigation();

  const handleProceedToDetails = (item: Food) => {
    navigation.navigate(MainNavigationRoutes.Operations, {
      screen: OperationsNavigationRoutes.Details,
      params: item,
    });
  };

  useEffect(() => {
    foodsStore.fetchFoodInformation();
  }, []);

  const renderItem = ({item}: ListRenderItemInfo<Food>) => (
    <FoodItem
      item={item}
      handlePress={handleProceedToDetails}
    />
  );

  if (!foodsStore.foods.length) {
    return <Loader />;
  }

  return (
    <View>
      <FoodCategories
        selectedCategory={foodsStore.selectedCategory}
      />

      <FlatList
        contentContainerStyle={styles.flatListContainer}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={foodsStore.foods}
        renderItem={renderItem}
      />
    </View>
  );
});

export const flatListContainerMargin = 50;

const styles = StyleSheet.create({
  flatListContainer: {
    marginLeft: 0,
  },
});
