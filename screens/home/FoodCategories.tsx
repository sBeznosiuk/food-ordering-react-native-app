import {observer} from 'mobx-react-lite';
import React, {FC} from 'react';
import {ListRenderItemInfo, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

import {useStore} from '../../store/StoreContext';
import {FoodCategoriesItem} from './FoodCategoriesItem';

interface FoodCategoriesProps {
  selectedCategory: number;
}

export const FoodCategories: FC<FoodCategoriesProps> =
  observer(({selectedCategory}) => {
    const {foodsStore} = useStore();

    const handleSelectCategory = (id: number) =>
      foodsStore.fetchFoodsByCategory(id);

    const renderItem = ({
      item,
    }: ListRenderItemInfo<{title: string; id: number}>) => (
      <FoodCategoriesItem
        handleSelectCategory={handleSelectCategory}
        isActive={selectedCategory === item.id}
        item={item}
      />
    );

    const keyExtractor = (item: {
      title: string;
      id: number;
    }) => `category=${item.id}`;

    return (
      <FlatList
        contentContainerStyle={styles.flatListContainer}
        keyExtractor={keyExtractor}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={foodsStore.categories}
        renderItem={renderItem}
      />
    );
  });

const styles = StyleSheet.create({
  flatListContainer: {
    height: 50,
    marginLeft: 35,
  },
});
